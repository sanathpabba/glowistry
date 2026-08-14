import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { salon } from "@/lib/salon-data";

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  return <><div className="utility-bar"><div className="wide-shell"><p>Premium home-based salon in North York</p><div><a href={salon.phoneHref}>{salon.phoneDisplay}</a><span>·</span><a href={`mailto:${salon.email}`}>{salon.email}</a></div></div></div><header className={`reference-header${solid ? " header-solid" : ""}`}><div className="wide-shell nav-row"><Link href="/" className="logo-link"><BrandMark /></Link><nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/#services">Services</Link><Link href="/#reviews">Reviews</Link><Link href="/#gallery">Gallery</Link><Link href="/#contact">Contact</Link></nav><a className="outline-button" href={salon.bookingHref}>Book now <ArrowIcon /></a></div></header></>;
}
