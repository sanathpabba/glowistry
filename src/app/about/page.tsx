import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { categories, salon } from "@/lib/salon-data";

export const metadata: Metadata = { title: "About Glowistry | Private Beauty Studio in North York", description: "Meet Glowistry, a premium home-based beauty salon offering personalized threading, facials, hair, nails and more in North York." };

function Icon({ name }: { name: "phone" | "pin" | "calendar" | "gift" }) {
  const paths = { phone:"M7 3H4L3 6c0 8 7 15 15 15l3-3v-3l-5-2-2 2c-3-1-5-3-5-5l2-2-2-5Z", pin:"M12 22s7-6 7-13A7 7 0 1 0 5 9c0 7 7 13 7 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", calendar:"M5 3v3m14-3v3M3 9h18M5 5h14a2 2 0 0 1 2 2v14H3V7a2 2 0 0 1 2-2Z", gift:"M3 10h18v11H3V10Zm-1-4h20v4H2V6Zm10 0c-4 0-5-2-4-4 2-2 4 1 4 4Zm0 0c4 0 5-2 4-4-2-2-4 1-4 4Zm0 0v15" };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} /></svg>;
}

export default function AboutPage() {
  return <main className="about-page"><SiteHeader solid />
    <section className="profile-hero"><div className="wide-shell breadcrumb"><Link href="/">Home</Link><span>/</span><b>About</b></div><div className="wide-shell profile-grid">
      <div className="profile-art"><Image src="/images/salon/studio-interior.png" alt="Glowistry private beauty treatment studio" fill priority sizes="(max-width: 620px) 100vw, 260px"/><span>G</span></div>
      <div className="profile-summary"><p className="section-kicker">Premium home-based salon</p><h1>Amulya Makeovers<br /><em>by Glowistry</em></h1><div className="salon-meta"><a href={salon.phoneHref}><Icon name="phone"/><span>{salon.phoneDisplay}<small>Call for an appointment</small></span></a><div><Icon name="pin"/><span>{salon.address}<small>North York, Ontario</small></span></div></div><div className="profile-actions"><a className="solid-button" href={salon.bookingHref}><Icon name="calendar"/> Book now</a><a className="profile-secondary" href={`mailto:${salon.email}`}><Icon name="gift"/>Ask about bridal packages</a></div></div>
      <aside className="hours-card"><div><span className="status-dot"/>By appointment</div><h2>Hours</h2><dl><div><dt>Monday – Friday</dt><dd>Call to confirm</dd></div><div><dt>Saturday</dt><dd>By appointment</dd></div><div><dt>Sunday</dt><dd>By appointment</dd></div></dl><p>Appointments are arranged personally so each client receives unhurried, dedicated care.</p></aside>
    </div></section>
    <section className="profile-content wide-shell"><article className="story-card"><p className="section-kicker">About us</p><h2>Personal beauty care,<br /><em>made beautifully simple.</em></h2><div className="service-tags">{["Threading","Facials","Hair","Nails","Mehendi","Massage"].map(tag=><span key={tag}>{tag}</span>)}</div><p>Welcome to Glowistry, a private home-based salon created for clients who value thoughtful service, beautiful results and a calmer appointment experience. Located in North York, our studio offers a welcoming pause from the rush of everyday life.</p><p>Comfort, hygiene and satisfaction shape every service. Treatments are approached with care and adapted to your needs—from precise everyday grooming to restorative rituals and special-occasion artistry.</p><p>Booking is deliberately personal. Call or email to find the right treatment and reserve time that works for you.</p></article><aside className="promise-card"><p className="section-kicker">Our promise</p>{[{n:"01",t:"Personal attention",d:"Every appointment is one-to-one and tailored."},{n:"02",t:"Considered care",d:"A clean environment and professional approach."},{n:"03",t:"Beautiful detail",d:"Careful finishing from consultation to result."}].map(item=><div key={item.n}><b>{item.n}</b><span><strong>{item.t}</strong><small>{item.d}</small></span></div>)}</aside></section>
    <section className="about-services"><div className="wide-shell"><header className="about-section-head"><div><p className="section-kicker">Explore services</p><h2>Find your next<br /><em>beauty ritual.</em></h2></div><Link href="/#services">View all services →</Link></header><div className="compact-services">{categories.slice(0,8).map((category,index)=><Link href={`/services/${category.id}`} key={category.id}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{category.name}</h3><p>{category.services.length} services available</p></div><b>→</b></Link>)}</div></div></section>
    <section className="about-cta wide-shell"><div><p className="section-kicker">Ready when you are</p><h2>Your time to <em>glow.</em></h2><p>Tell us what you have in mind and we’ll help you choose the right service.</p></div><a className="solid-button" href={salon.bookingHref}>Call {salon.phoneDisplay}</a></section>
    <Footer /><div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
  </main>;
}
