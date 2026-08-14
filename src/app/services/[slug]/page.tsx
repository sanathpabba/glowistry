import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { categories, categoryImages, salon } from "@/lib/salon-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return categories.map(({ id }) => ({ slug: id })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(({ id }) => id === slug);
  if (!category) return {};
  return { title: `${category.name} in North York | Glowistry`, description: `${category.description} View ${category.name.toLowerCase()} services and pricing at Glowistry.` };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const categoryIndex = categories.findIndex(({ id }) => id === slug);
  if (categoryIndex < 0) notFound();
  const category = categories[categoryIndex];
  const related = categories.filter(({ id }) => id !== slug).slice(categoryIndex % 4, categoryIndex % 4 + 3);
  const image = categoryImages[slug];

  return <main className="service-page"><SiteHeader solid />
    <section className="service-page-hero"><div className="wide-shell"><div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#services">Services</Link><span>/</span><b>{category.name}</b></div><div className="service-hero-grid"><div><p className="section-kicker">{category.eyebrow}</p><h1>{category.name}</h1><p>{category.description}</p><a className="solid-button" href={salon.bookingHref}>Book this service →</a></div><div className={`service-page-art tile-${categoryIndex%6+1}`}><Image src={image} alt={`${category.name} service at Glowistry`} fill priority sizes="(max-width: 620px) 100vw, 430px"/></div></div></div></section>
    <section className="service-price-section wide-shell"><header><div><p className="section-kicker">Services & pricing</p><h2>Choose your<br /><em>perfect treatment.</em></h2></div><p>All prices are in Canadian dollars. Prices marked with “+” may vary depending on length, complexity or product requirements.</p></header><div className="service-price-layout"><div className="large-price-list">{category.services.map((service,index)=><div key={service.name}><span className="price-index">{String(index+1).padStart(2,"0")}</span><span className="price-name"><strong>{service.name}</strong>{service.note&&<small>{service.note}</small>}</span><i/><b>{service.price}</b></div>)}</div><aside><p className="section-kicker">Good to know</p><h3>Prepared with care.</h3><p>Please mention any sensitivities, preferences or special requirements when booking so your appointment can be tailored appropriately.</p><a href={salon.phoneHref}>Call {salon.phoneDisplay}</a></aside></div></section>
    <section className="related-services"><div className="wide-shell"><header><div><p className="section-kicker">You may also love</p><h2>Explore more at <em>Glowistry.</em></h2></div><Link href="/#services">View all services →</Link></header><div>{related.map((item,index)=><Link href={`/services/${item.id}`} key={item.id}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.name}</h3><p>{item.description}</p><b>Explore →</b></Link>)}</div></div></section>
    <section className="service-booking wide-shell"><p className="section-kicker">Reserve your time</p><h2>Ready for your<br /><em>{category.name.toLowerCase()} appointment?</em></h2><p>Call Glowistry to ask a question or reserve your private appointment.</p><a className="solid-button" href={salon.bookingHref}>Book now →</a></section>
    <Footer /><div className="mobile-actions"><a href={salon.phoneHref}>Call us</a><a href={salon.bookingHref}>Book now</a></div>
  </main>;
}
