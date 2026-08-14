"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { ThemeToggle } from "./theme-toggle";
import { salon } from "@/lib/salon-data";

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const navLinks = [{ href: "/#services", label: "Services" }, { href: "/pricing", label: "Pricing" }, { href: "/#reviews", label: "Reviews" }, { href: "/#gallery", label: "Gallery" }, { href: "/#contact", label: "Contact" }, { href: "/about", label: "About" }];

  return <><div className="utility-bar"><div className="wide-shell"><p>Premium home-based beauty studio for women in North York</p><div><a href={salon.phoneHref}>{salon.phoneDisplay}</a><span>·</span><a href={`mailto:${salon.email}`}>{salon.email}</a></div></div></div><header className={`reference-header${solid ? " header-solid" : ""}${open ? " menu-open" : ""}`}><div className="wide-shell nav-row"><Link href="/" className="logo-link" onClick={() => setOpen(false)}><BrandMark /></Link><nav className="desktop-nav" aria-label="Main navigation">{navLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><div className="header-actions"><ThemeToggle /><a className="outline-button header-book" href={salon.bookingHref}>Book now <ArrowIcon /></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button></div></div><nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open}>{navLinks.map((link, index) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{link.label}</Link>)}<a className="mobile-nav-book" href={salon.bookingHref} onClick={() => setOpen(false)}>Book an appointment <ArrowIcon /></a></nav></header></>;
}
