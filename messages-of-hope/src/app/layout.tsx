import { ReactNode } from "react";
import type { Metadata } from "next";
import { Coiny, Quicksand, Open_Sans } from "next/font/google";
import { Navbar } from "@/components/panel/navbar/navbar";
import { Footer } from "@/components/panel/footer/footer";
import "./globals.css";

// Font Awesome Config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { generateMetadata } from "@/lib/utils";
config.autoAddCss = false;

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

export const metadata: Metadata = generateMetadata();

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${coiny.variable} ${quicksand.variable} ${openSans.variable}`}>
        <div itemScope itemType="https://schema.org/WebSite">
          <link itemProp="url" href="https://www.messagesofhope.co.uk" />
          <meta itemProp="name" content="Messages of Hope"/>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
