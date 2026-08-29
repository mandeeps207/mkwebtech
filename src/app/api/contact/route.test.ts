import { describe, expect, it, vi } from "vitest";
import { createContactHandler, type ContactEmail } from "./contact-handler";

const validBody = {
  name: "John Smith",
  email: "visitor@example.com",
  store: "example.myshopify.com",
  subject: "Fixify support",
  message: "Please help with my Shopify store.",
  product: "fixify",
  website: "",
  turnstileToken: "valid-token"
};

function request(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
}

function setup(verified = true) {
  const verifyTurnstile = vi.fn().mockResolvedValue(verified);
  const sendEmail = vi.fn<(email: ContactEmail) => Promise<void>>().mockResolvedValue(undefined);
  const handler = createContactHandler({ verifyTurnstile, sendEmail });
  return { handler, verifyTurnstile, sendEmail };
}

describe("POST /api/contact", () => {
  it("sends one correctly addressed email after valid Turnstile verification", async () => {
    const { handler, verifyTurnstile, sendEmail } = setup();
    const response = await handler(request(validBody));

    expect(response.status).toBe(200);
    expect(verifyTurnstile).toHaveBeenCalledWith("valid-token");
    expect(sendEmail).toHaveBeenCalledOnce();
    expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
      from: "MKWebTech Contact <contact@mkwebtech.com>",
      to: "mkwebtecindia@gmail.com",
      replyTo: "visitor@example.com"
    }));
  });

  it.each([
    ["an invalid email", { ...validBody, email: "not-an-email" }],
    ["a missing required field", { ...validBody, name: undefined }]
  ])("returns 400 for %s before external calls", async (_label, body) => {
    const { handler, verifyTurnstile, sendEmail } = setup();
    const response = await handler(request(body));

    expect(response.status).toBe(400);
    expect(verifyTurnstile).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns 403 when the Turnstile token is missing", async () => {
    const { handler, verifyTurnstile, sendEmail } = setup();
    const response = await handler(request({ ...validBody, turnstileToken: "" }));

    expect(response.status).toBe(403);
    expect(verifyTurnstile).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns 403 and does not send when Cloudflare rejects the token", async () => {
    const { handler, sendEmail } = setup(false);
    const response = await handler(request(validBody));

    expect(response.status).toBe(403);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns a safe 502 when Resend fails", async () => {
    const { handler, sendEmail } = setup();
    sendEmail.mockRejectedValueOnce(new Error("private provider detail"));
    const response = await handler(request(validBody));
    const body = await response.json() as { message: string };

    expect(response.status).toBe(502);
    expect(body.message).toBe("Unable to send your message right now. Please try again.");
    expect(body.message).not.toContain("private provider detail");
  });

  it("silently accepts a populated honeypot without external calls", async () => {
    const { handler, verifyTurnstile, sendEmail } = setup();
    const response = await handler(request({ website: "spam.example" }));

    expect(response.status).toBe(200);
    expect(verifyTurnstile).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("escapes visitor HTML and preserves Fixify context", async () => {
    const { handler, sendEmail } = setup();
    const response = await handler(request({
      ...validBody,
      name: "John <Admin>",
      message: "<script>alert('x')</script> & more text"
    }));

    expect(response.status).toBe(200);
    const email = sendEmail.mock.calls[0][0];
    expect(email.subject).toContain("fixify");
    expect(email.html).toContain("John &lt;Admin&gt;");
    expect(email.html).toContain("&lt;script&gt;alert(&#39;x&#39;)&lt;/script&gt; &amp; more text");
    expect(email.html).not.toContain("<script>");
  });

  it("rejects malformed JSON", async () => {
    const { handler } = setup();
    const response = await handler(new Request("http://localhost/api/contact", { method: "POST", body: "{" }));
    expect(response.status).toBe(400);
  });
});
