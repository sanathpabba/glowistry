import Link from "next/link";
import { categories } from "@/lib/salon-data";

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }

export function ServiceExplorer() {
  return <div className="category-showcase">{categories.map((category,index)=><Link href={`/services/${category.id}`} className="category-tile" key={category.id}><div className={`tile-art tile-${index%6+1}`}><span>{String(index+1).padStart(2,"0")}</span></div><div><p>{category.eyebrow}</p><h3>{category.name}</h3><span>Explore service <ArrowIcon /></span></div></Link>)}</div>;
}
