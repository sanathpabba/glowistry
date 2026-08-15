import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { salon } from "@/lib/salon-data";

function SocialIcon({ name }: { name: "instagram" | "whatsapp" | "telegram" }) {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="social-icon-dot" cx="17.4" cy="6.7" r="1"/></>,
    whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 15.7-4.5Z"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.9.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 .4-.2 1.4-.8 1.9-.6.6-1.5.9-2.5.7-1.3-.2-3.1-.9-5.1-2.8-1.7-1.6-2.8-3.6-3-4.9-.2-.9.1-1.5.4-1.9Z"/></>,
    telegram: <path d="M21.3 4.1 18.2 19c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-8c.4-.3-.1-.5-.6-.2L6.2 13l-4.7-1.5c-1-.3-1-1 .2-1.5l18.2-7c.8-.3 1.6.2 1.4 1.1Z"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main page-shell">
        <div><BrandMark /><p>A premium home-based beauty experience for women.<br />North York, Ontario.</p></div>
        <div><p className="footer-label">Visit</p><address>{salon.addressLines.map((line) => <span key={line}>{line}</span>)}</address></div>
        <div><p className="footer-label">Connect</p><a href={salon.phoneHref}>{salon.phoneDisplay}</a><a href={`mailto:${salon.email}`}>{salon.email}</a><div className="social-links"><a href={salon.instagramHref} target="_blank" rel="noreferrer" aria-label="Follow Glowistry on Instagram"><SocialIcon name="instagram"/><span>Instagram</span></a><a href={salon.whatsappHref} target="_blank" rel="noreferrer" aria-label="Message Glowistry on WhatsApp"><SocialIcon name="whatsapp"/><span>WhatsApp</span></a><a href={salon.telegramHref} target="_blank" rel="noreferrer" aria-label="Message Glowistry on Telegram"><SocialIcon name="telegram"/><span>Telegram</span></a></div></div>
        <div><p className="footer-label">Explore</p><Link href="/#services">Our services</Link><Link href="/pricing">Full pricing</Link><Link href="/contact">Contact us</Link><Link href="/about">Our story</Link></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} Glowistry</span><span>By appointment only</span></div>
    </footer>
  );
}
