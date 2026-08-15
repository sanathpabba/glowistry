import { NextRequest, NextResponse } from "next/server";
import { salon } from "@/lib/salon-data";

type ContactPayload = Record<string, unknown>;
const requests = new Map<string, { count: number; resetAt: number }>();

function value(payload: ContactPayload, key: string, limit: number) {
  return typeof payload[key] === "string" ? payload[key].trim().slice(0, limit) : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function rateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);
  if (!current || current.resetAt < now) { requests.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 }); return false; }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: NextRequest) {
  if (Number(request.headers.get("content-length") || 0) > 15_000) return NextResponse.json({ message: "The enquiry is too large." }, { status: 413 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ message: "Too many requests. Please wait a few minutes or call us." }, { status: 429 });

  let payload: ContactPayload;
  try { payload = await request.json(); } catch { return NextResponse.json({ message: "Invalid form submission." }, { status: 400 }); }
  if (value(payload, "website", 100)) return NextResponse.json({ message: "Thank you. Your enquiry has been received." });

  const name = value(payload, "name", 80);
  const email = value(payload, "email", 120).toLowerCase();
  const phone = value(payload, "phone", 30);
  const service = value(payload, "service", 100);
  const preferredDate = value(payload, "preferredDate", 20) || "Not specified";
  const contactMethod = value(payload, "contactMethod", 30) || "Not specified";
  const enquiry = value(payload, "message", 2000);
  const consent = value(payload, "consent", 10);
  if (!name || !phone || !service || !enquiry || consent !== "yes" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ message: "Please complete all required fields with valid details." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || salon.email;
  if (!apiKey || !from) {
    console.error("Contact form email configuration is incomplete.");
    return NextResponse.json({ message: "Online enquiries are being configured. Please call or email Glowistry directly." }, { status: 503 });
  }

  const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), service: escapeHtml(service), preferredDate: escapeHtml(preferredDate), contactMethod: escapeHtml(contactMethod), enquiry: escapeHtml(enquiry).replace(/\n/g, "<br />") };
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New Glowistry enquiry from ${name}`, html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#2d2520"><h1 style="font-family:Georgia,serif">New client enquiry</h1><p>A new request was submitted through glowistry.ca.</p><table style="width:100%;border-collapse:collapse"><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Name</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.name}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Email</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.email}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Telephone</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.phone}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Service</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.service}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Preferred date</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.preferredDate}</td></tr><tr><td style="padding:10px;border-bottom:1px solid #e8dcc8"><b>Contact by</b></td><td style="padding:10px;border-bottom:1px solid #e8dcc8">${safe.contactMethod}</td></tr></table><h2 style="font-family:Georgia,serif">Enquiry</h2><p style="line-height:1.7">${safe.enquiry}</p><p style="color:#6b6360">Reply directly to this email to contact ${safe.name}.</p></div>`, text: `New Glowistry enquiry\n\nName: ${name}\nEmail: ${email}\nTelephone: ${phone}\nService: ${service}\nPreferred date: ${preferredDate}\nPreferred contact method: ${contactMethod}\n\n${enquiry}` }) });
  if (!response.ok) { console.error("Resend rejected contact email:", response.status, await response.text()); return NextResponse.json({ message: "We could not send your enquiry. Please call or email Glowistry directly." }, { status: 502 }); }
  return NextResponse.json({ message: "Your enquiry has been sent." });
}
