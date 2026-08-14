import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { salon } from "@/lib/salon-data";

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main page-shell">
        <div><BrandMark /><p>Beauty rituals, considered with care.<br />North York, Ontario.</p></div>
        <div><p className="footer-label">Visit</p><address>{salon.address}</address></div>
        <div><p className="footer-label">Connect</p><a href={salon.phoneHref}>{salon.phoneDisplay}</a><a href={`mailto:${salon.email}`}>{salon.email}</a></div>
        <div><p className="footer-label">Explore</p><Link href="/#services">Services</Link><Link href="/about">Our story</Link></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} Glowistry</span><span>By appointment only</span></div>
    </footer>
  );
}
