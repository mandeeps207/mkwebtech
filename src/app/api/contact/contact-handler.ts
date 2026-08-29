import { z } from "zod";

const FROM_ADDRESS = "MKWebTech Contact <contact@mkwebtech.com>";
export const DEFAULT_CONTACT_EMAIL = "mkwebtecindia@gmail.com";
const SUCCESS_MESSAGE = "Thanks! Your message has been sent. We'll get back to you soon.";
export const SEND_ERROR_MESSAGE = "Unable to send your message right now. Please try again.";
const subjects = ["Fixify support", "Product support", "Implementation help", "Partnership", "Other"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  store: z.string().trim().max(253).optional().default(""),
  subject: z.enum(subjects),
  message: z.string().trim().min(10).max(5_000),
  product: z.string().trim().max(100).optional().default("")
});

type Contact = z.infer<typeof contactSchema>;

export type ContactEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

type ContactDependencies = {
  verifyTurnstile: (token: string) => Promise<boolean>;
  sendEmail: (email: ContactEmail) => Promise<void>;
  recipient?: string;
};

function json(message: string, status: number) {
  return Response.json({ message }, { status });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character] ?? character);
}

function createEmail(contact: Contact, recipient: string): ContactEmail {
  const fields = [
    ["Name", contact.name],
    ["Email", contact.email],
    ["Store/domain", contact.store],
    ["Subject", contact.subject],
    ["Product", contact.product]
  ].filter(([, value]) => value);
  const textFields = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlFields = fields
    .map(([label, value]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${label}</th><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`)
    .join("");
  const productSuffix = contact.product ? ` - ${contact.product.replace(/[\r\n]/g, " ")}` : "";

  return {
    from: FROM_ADDRESS,
    to: recipient,
    replyTo: contact.email,
    subject: `New website enquiry from ${contact.name.replace(/[\r\n]/g, " ")}${productSuffix}`,
    text: `New MKWebTech website enquiry\n\n${textFields}\n\nMessage:\n${contact.message}`,
    html: `<h1 style="font-size:20px">New MKWebTech website enquiry</h1><table>${htmlFields}</table><h2 style="font-size:16px;margin-top:20px">Message</h2><p style="white-space:pre-wrap">${escapeHtml(contact.message)}</p>`
  };
}

export function createContactHandler(dependencies: ContactDependencies) {
  return async function contactHandler(request: Request) {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return json("Please check the form and try again.", 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json("Please check the form and try again.", 400);
    }

    const record = body as Record<string, unknown>;
    if (typeof record.website === "string" && record.website.trim()) {
      return json(SUCCESS_MESSAGE, 200);
    }

    const result = contactSchema.safeParse(record);
    if (!result.success) {
      return json("Please check the form fields and try again.", 400);
    }

    if (typeof record.turnstileToken !== "string" || !record.turnstileToken.trim()) {
      return json("Please complete the security check and try again.", 403);
    }

    let verified = false;
    try {
      verified = await dependencies.verifyTurnstile(record.turnstileToken.trim());
    } catch (error) {
      console.error({ operation: "turnstile_verify", category: error instanceof Error ? error.name : "UnknownError", timestamp: new Date().toISOString() });
    }

    if (!verified) {
      return json("The security check could not be verified. Please try again.", 403);
    }

    try {
      await dependencies.sendEmail(createEmail(result.data, dependencies.recipient ?? DEFAULT_CONTACT_EMAIL));
    } catch (error) {
      console.error({ operation: "resend_send", category: error instanceof Error ? error.name : "UnknownError", timestamp: new Date().toISOString() });
      return json(SEND_ERROR_MESSAGE, 502);
    }

    return json(SUCCESS_MESSAGE, 200);
  };
}
