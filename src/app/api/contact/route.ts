import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const organisation = clean(body.organisation, 160);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const interest = clean(body.interest, 80);
  const message = clean(body.message, 4000);

  if (!name || !organisation || !email || !message || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Without an email provider configured, the client falls back to a mailto link.
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, fallback: "mailto" },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Sandap Website <onboarding@resend.dev>";

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#14120f;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:20px">New project enquiry</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 4px"><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 4px"><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p style="margin:0 0 16px"><strong>Interest:</strong> ${escapeHtml(interest || "—")}</p>
      <hr style="border:none;border-top:1px solid #e5dccb;margin:16px 0" />
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>
  `;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Project enquiry — ${organisation}`,
      html,
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
