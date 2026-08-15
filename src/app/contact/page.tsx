import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { salon } from "@/lib/salon-data";

export const metadata: Metadata = { title: "Contact Glowistry | Request an Appointment", description: "Contact Glowistry, a premium home-based women’s beauty studio in North York. Send an enquiry or request a private appointment." };

export default function ContactPage() {
  return <main className="contact-page"><SiteHeader solid />
    <section className="contact-page-hero"><div className="wide-shell"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><b>Contact</b></div><p className="section-kicker">Private appointments in North York</p><h1>Let us create your<br /><em>next beauty moment.</em></h1><p>Tell us what you have in mind. We will review your request and contact you personally to discuss availability and the service best suited to you.</p></div></section>
    <section className="contact-page-main wide-shell"><aside><p className="section-kicker">Contact Glowistry</p><h2>We look forward<br />to hearing from you.</h2><div className="contact-page-details"><div><span>Call</span><a href={salon.phoneHref}>{salon.phoneDisplay}</a></div><div><span>Email</span><a href={`mailto:${salon.email}`}>{salon.email}</a></div><div><span>Visit</span><address>{salon.addressLines.map((line) => <span key={line}>{line}</span>)}</address></div><div><span>Appointments</span><p>By appointment only<br />Advance reservations are recommended.</p></div></div><p className="contact-home-note">Glowistry is a professionally appointed home-based beauty studio for women. Your appointment is private, personal, and thoughtfully prepared.</p></aside><div className="contact-form-card"><p className="section-kicker">Send an enquiry</p><h2>How may we<br /><em>assist you?</em></h2><ContactForm /></div></section>
    <Footer /><div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
  </main>;
}
