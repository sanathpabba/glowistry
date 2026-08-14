import Link from "next/link";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ServiceExplorer } from "@/components/service-explorer";
import { salon } from "@/lib/salon-data";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="reference-hero">
        <div className="hero-placeholder" aria-hidden="true"><span className="shape-one"/><span className="shape-two"/><span className="shape-three"/></div>
        <div className="wide-shell hero-inner">
          <div className="hero-kicker"><i />Beauty · Relaxation · Style</div>
          <h1>Feel beautiful.<br /><em>Feel like yourself.</em></h1>
          <p>Thoughtful beauty services, a welcoming private setting and time reserved entirely for you.</p>
          <div className="hero-buttons"><a className="solid-button" href={salon.bookingHref}>Book an appointment <ArrowIcon /></a><Link className="light-link" href="#services">Explore services</Link></div>
        </div>
        <div className="slider-dots" aria-label="Featured slide 1 of 3"><b /><i /><i /></div>
        <div className="hero-side-label">Amulya Makeovers <span>by Glowistry</span></div>
      </section>

      <section className="promotion wide-shell">
        <div className="promo-mark">G</div>
        <div><p className="section-kicker">A little something special</p><h2>Make time for your glow.</h2><p>Call us for current seasonal packages, bridal services and personalized treatment recommendations.</p></div>
        <a className="outline-button dark" href={salon.bookingHref}>View offer <ArrowIcon /></a>
      </section>

      <section className="about-section wide-shell" id="about">
        <div className="about-visual image-placeholder"><span>Glowistry</span><i>Image placeholder</i></div>
        <div className="about-copy"><p className="section-kicker">About Glowistry</p><h2>More than a salon.<br /><em>Your beauty sanctuary.</em></h2><p>Step into a calm, private space where beauty, comfort and personal attention come together. Every service is delivered with care, precision and a genuine understanding of what makes you feel your best.</p><ul><li><b>01</b> Personal, one-to-one appointments</li><li><b>02</b>Hygienic and considered care</li><li><b>03</b>Modern techniques, tailored results</li></ul><a className="text-action" href="#services">Discover our services <ArrowIcon /></a></div>
      </section>

      <section className="service-showcase" id="services">
        <div className="wide-shell">
          <header className="center-heading"><p className="section-kicker">Our expertise</p><h2>Services made for <em>your moment</em></h2><p>From everyday upkeep to special-occasion artistry, find the care that feels right for you.</p></header>
          <ServiceExplorer />
        </div>
      </section>

      <section className="testimonial-section" id="reviews">
        <div className="wide-shell testimonial-grid"><div><p className="section-kicker">Happy clients</p><h2>Kind words,<br /><em>beautiful results.</em></h2><div className="review-score"><b>5.0</b><span>★★★★★<small>Client experience</small></span></div></div><blockquote><div className="quote-mark">“</div><p>Every visit is designed to feel calm, personal and beautifully unhurried—from your first conversation to the finishing touch.</p><footer><span>Glowistry experience</span><div><button aria-label="Previous review">←</button><button aria-label="Next review">→</button></div></footer></blockquote></div>
      </section>

      <section className="contact-section wide-shell" id="contact">
        <div className="contact-card"><p className="section-kicker">Plan your visit</p><h2>We would love<br />to see you.</h2><div className="contact-list"><div><span>Address</span><p>{salon.address}</p></div><div><span>Phone</span><a href={salon.phoneHref}>{salon.phoneDisplay}</a></div><div><span>Email</span><a href={`mailto:${salon.email}`}>{salon.email}</a></div><div><span>Hours</span><p>By appointment only<br />Call to confirm availability</p></div></div><a className="solid-button" href={salon.bookingHref}>Book your visit <ArrowIcon /></a></div>
        <div className="map-placeholder"><div className="map-lines"/><span className="map-pin">G</span><p>North York, Ontario</p></div>
      </section>

      <section className="gallery-section" id="gallery">
        <header className="center-heading wide-shell"><p className="section-kicker">Portfolio</p><h2>A glimpse of <em>Glowistry</em></h2></header>
        <div className="gallery-grid">{["Nail artistry","Radiant skin","Hair styling","Mehendi","Bridal beauty","Salon details"].map((label,index)=><div className={`gallery-item gallery-${index+1}`} key={label}><span>{label}</span><i>Image placeholder</i></div>)}</div>
      </section>
      <Footer />
      <div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
    </main>
  );
}
