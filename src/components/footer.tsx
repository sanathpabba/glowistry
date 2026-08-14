import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { salon } from "@/lib/salon-data";

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main page-shell">
        <div><BrandMark /><p>A premium home-based beauty experience for women.<br />North York, Ontario.</p></div>
        <div><p className="footer-label">Visit</p><address>{salon.addressLines.map((line) => <span key={line}>{line}</span>)}</address></div>
        <div><p className="footer-label">Connect</p><a href={salon.phoneHref}>{salon.phoneDisplay}</a><a href={`mailto:${salon.email}`}>{salon.email}</a></div>
        <div><p className="footer-label">Explore</p><Link href="/#services">Our services</Link><Link href="/pricing">Full pricing</Link><Link href="/about">Our story</Link></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} Glowistry</span><span>By appointment only</span></div>
    </footer>
  );
}
