import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://glowistry.ca"),
  title: "Glowistry | Premium Home-Based Women’s Salon in North York",
  description: "A premium home-based beauty studio for women offering personalized threading, waxing, facials, hair, nails, mehendi, and occasion services in North York, Ontario.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var saved=localStorage.getItem('glowistry-theme');document.documentElement.dataset.theme=saved==='night'?'night':'day'}catch(e){document.documentElement.dataset.theme='day'}})()`;
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
