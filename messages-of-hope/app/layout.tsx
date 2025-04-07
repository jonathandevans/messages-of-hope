import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/header/header";
import { Coiny, Quicksand, Open_Sans } from "next/font/google";
import "./globals.css";

// Metadata setup
import { generateMetadata } from "@/lib/utils";
import Footer from "@/components/footer/footer";
export const metadata: Metadata = generateMetadata();

// Fonts
const coiny = Coiny({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${coiny.variable} ${quicksand.variable} ${openSans.variable}`}
      >
        <div itemScope itemType="https://schema.org/WebSite">
          <link itemProp="url" href="https://www.messagesofhope.co.uk" />
          <meta itemProp="name" content="Messages of Hope" />
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
