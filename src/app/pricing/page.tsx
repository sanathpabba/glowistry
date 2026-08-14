import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { categories, categoryImages, salon } from "@/lib/salon-data";

export const metadata: Metadata = {
  title: "Salon Services & Pricing | Glowistry North York",
  description: "Explore complete pricing for threading, waxing, facials, hair, nails, mehendi, massage, saree pre-pleating, and more at Glowistry’s home-based women’s beauty studio.",
};

export default function PricingPage() {
  return <main className="pricing-page"><SiteHeader solid />
    <section className="pricing-intro"><div className="wide-shell"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><b>Pricing</b></div><p className="section-kicker">The complete menu</p><h1>Services &amp; <em>pricing.</em></h1><p>Explore our complete collection of women’s beauty services, thoughtfully delivered in a private home-based studio in North York.</p><a className="solid-button" href={salon.bookingHref}>Reserve an appointment →</a></div></section>

    <section className="pricing-collection">{categories.map((category, index) => <article className="pricing-category" id={category.id} key={category.id}><div className="pricing-category-inner wide-shell">
      <div className="pricing-image"><Image src={categoryImages[category.id]} alt={`${category.name} service at Glowistry`} fill sizes="(max-width: 720px) 100vw, 50vw"/><span>{String(index + 1).padStart(2, "0")}</span></div>
      <div className="pricing-content"><p className="section-kicker">{category.eyebrow}</p><h2>{category.name}</h2><p className="pricing-description">{category.description}</p><div className="pricing-list">{category.services.map((service) => <div key={service.name}><span><strong>{service.name}</strong>{service.note && <small>{service.note}</small>}</span><i/><b>{service.price}</b></div>)}</div><Link href={`/services/${category.id}`}>Discover {category.name} →</Link></div>
    </div></article>)}</section>

    <section className="pricing-notes"><div className="wide-shell"><p className="section-kicker">A considered appointment</p><h2>Prepared especially<br /><em>for you.</em></h2><div><p>All prices are listed in Canadian dollars. Prices marked with “+” may vary according to length, complexity, or product requirements.</p><p>Please share any sensitivities, preferences, or special requirements when reserving so your appointment can be tailored with care.</p></div><a className="solid-button" href={salon.bookingHref}>Call {salon.phoneDisplay}</a></div></section>
    <Footer /><div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
  </main>;
}
