"use client";

import { FormEvent, useState } from "react";
import { categories } from "@/lib/salon-data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send your enquiry.");
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your enquiry has been sent to Glowistry, and we will be in touch shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your enquiry. Please call or try again.");
    }
  }

  return <form className="contact-form" onSubmit={submitForm}>
    <div className="form-row"><label>Full name <span>*</span><input name="name" type="text" autoComplete="name" maxLength={80} required /></label><label>Email address <span>*</span><input name="email" type="email" autoComplete="email" maxLength={120} required /></label></div>
    <div className="form-row"><label>Telephone <span>*</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} required /></label><label>Service of interest <span>*</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{categories.map((category) => <option value={category.name} key={category.id}>{category.name}</option>)}<option value="Bridal / occasion services">Bridal / occasion services</option><option value="General enquiry">General enquiry</option></select></label></div>
    <div className="form-row"><label>Preferred date<input name="preferredDate" type="date" /></label><label>Preferred contact method<select name="contactMethod" defaultValue="Phone"><option>Phone</option><option>Email</option><option>WhatsApp</option></select></label></div>
    <label>Your enquiry <span>*</span><textarea name="message" rows={6} maxLength={2000} placeholder="Tell us which service you are considering and any preferences we should know." required /></label>
    <label className="form-consent"><input name="consent" type="checkbox" value="yes" required /><span>I consent to Glowistry contacting me about this enquiry.</span></label>
    <label className="form-honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-submit"><button className="solid-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry →"}</button><p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p></div>
  </form>;
}
