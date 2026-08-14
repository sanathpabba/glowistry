import Link from "next/link";
import { BrandMark } from "./brand-mark";

const links = [
  ["Services", "#services"], ["Experience", "#experience"], ["About", "#about"], ["Contact", "#contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="#top" className="brand-link"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="button button-small" href="tel:+14168329212">Book now</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
