import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { ServiceExplorer } from "@/components/service-explorer";
import { ReviewSlider } from "@/components/review-slider";
import { salon } from "@/lib/salon-data";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="reference-hero">
        <div className="hero-placeholder"><Image src="/images/salon/hero-campaign.png" alt="Glowistry beauty professional in an elegant private salon" fill priority sizes="100vw" /></div>
        <div className="wide-shell hero-inner">
          <div className="hero-kicker"><i />Beauty · Relaxation · Style</div>
          <h1>Feel beautiful.<br /><em>Feel like yourself.</em></h1>
          <p>A refined home-based beauty experience for women, presented in a serene private setting and reserved entirely for you.</p>
          <div className="hero-buttons"><a className="solid-button" href={salon.bookingHref}>Book an appointment <ArrowIcon /></a><Link className="light-link" href="#services">Explore services</Link></div>
        </div>
        <div className="slider-dots" aria-label="Featured slide 1 of 3"><b /><i /><i /></div>
        <div className="hero-side-label">Amulya Makeovers <span>by Glowistry</span></div>
      </section>

      <section className="promotion wide-shell">
        <div className="promo-mark">G</div>
        <div><p className="section-kicker">A signature experience</p><h2>Make time for your radiance.</h2><p>Enquire about seasonal offerings, bridal artistry, and personalized treatment recommendations.</p></div>
        <a className="outline-button dark" href={salon.bookingHref}>View offer <ArrowIcon /></a>
      </section>

      <section className="about-section wide-shell" id="about">
        <div className="about-visual image-placeholder"><Image src="/images/salon/studio-interior.png" alt="Warm ivory Glowistry treatment studio with champagne-gold details" fill sizes="(max-width: 620px) 100vw, 45vw" /><span>Glowistry</span></div>
        <div className="about-copy"><p className="section-kicker">About Glowistry</p><h2>More than a salon.<br /><em>A private retreat for women.</em></h2><p>Discover a serene, professionally appointed home-based beauty studio where comfort, discretion, and personal attention come together. Every service is delivered with precision and a genuine understanding of the details that help you feel beautifully confident.</p><ul><li><b>01</b>Private, one-to-one appointments</li><li><b>02</b>Impeccable hygiene and considered care</li><li><b>03</b>Modern techniques with tailored results</li></ul><a className="text-action" href="#services">Discover our services <ArrowIcon /></a></div>
      </section>

      <section className="service-showcase" id="services">
        <div className="wide-shell">
          <header className="center-heading"><p className="section-kicker">Our expertise</p><h2>Beauty services for <em>every woman</em></h2><p>From refined everyday care to special-occasion artistry, discover a private experience thoughtfully tailored to you.</p></header>
          <ServiceExplorer />
        </div>
      </section>

      <section className="testimonial-section" id="reviews">
        <div className="wide-shell testimonial-grid"><div><p className="section-kicker">Happy clients</p><h2>Kind words,<br /><em>beautiful results.</em></h2><div className="review-score"><span>★★★★★<small>Amulya Makeovers on Google</small></span></div></div><ReviewSlider /></div>
      </section>

      <section className="contact-section wide-shell" id="contact">
        <div className="contact-card"><p className="section-kicker">Plan your visit</p><h2>We look forward<br />to welcoming you.</h2><div className="contact-list"><div><span>Studio address</span><p>{salon.addressLines.map((line) => <span className="address-line" key={line}>{line}</span>)}</p></div><div><span>Telephone</span><a href={salon.phoneHref}>{salon.phoneDisplay}</a></div><div><span>Email</span><a href={`mailto:${salon.email}`}>{salon.email}</a></div><div><span>Appointments</span><p>By appointment only<br />Please call to confirm availability</p></div></div><a className="solid-button" href={salon.bookingHref}>Reserve your appointment <ArrowIcon /></a></div>
        <div className="map-embed"><iframe title="Map showing Glowistry in North York" src={`https://www.google.com/maps?q=${encodeURIComponent(salon.address)}&output=embed`} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><a href={salon.googleMapsHref} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div>
      </section>

      <section className="gallery-section" id="gallery">
        <header className="center-heading wide-shell"><p className="section-kicker">Portfolio</p><h2>A glimpse of <em>Glowistry</em></h2></header>
        <div className="gallery-grid">{[{label:"Nail extensions",src:"/images/salon/nail-extensions.png"},{label:"Hydra facial",src:"/images/salon/hydra-facial.png"},{label:"Hair spa",src:"/images/salon/hair-spa.png"},{label:"Mehendi",src:"/images/salon/mehendi.png"},{label:"Saree preparation",src:"/images/salon/saree-prepleating.png"},{label:"Salon details",src:"/images/salon/studio-interior.png"}].map((item,index)=><div className={`gallery-item gallery-${index+1}`} key={item.label}><Image src={item.src} alt={item.label} fill sizes="(max-width: 620px) 50vw, 25vw"/><span>{item.label}</span></div>)}</div>
      </section>
      <Footer />
      <div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
    </main>
  );
}
