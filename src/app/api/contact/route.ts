import { Resend } from "resend";
import { createContactHandler, DEFAULT_CONTACT_EMAIL, SEND_ERROR_MESSAGE } from "./contact-handler";

function json(message: string, status: number) {
  return Response.json({ message }, { status });
}

async function verifyTurnstile(token: string, secret: string) {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
    cache: "no-store"
  });

  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  const resendKey = process.env.RESEND_API_KEY;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!resendKey || !turnstileSecret) {
    console.error({ operation: "contact_config", category: "MissingEnvironmentVariable", timestamp: new Date().toISOString() });
    return json(SEND_ERROR_MESSAGE, 500);
  }

  const resend = new Resend(resendKey);
  return createContactHandler({
    recipient: process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL,
    verifyTurnstile: (token) => verifyTurnstile(token, turnstileSecret),
    sendEmail: async (email) => {
      const { error } = await resend.emails.send(email);
      if (error) throw new Error(error.name);
    }
  })(request);
}
