import { ReactNode } from "react";
import "./globals.css";

// Metadata setup
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
export const metadata: Metadata = generateMetadata();

// Fonts
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <div itemScope itemType="https://schema.org/WebSite">
          <link itemProp="url" href="https://www.messagesofhope.co.uk" />
          <meta itemProp="name" content="Messages of Hope" />
        </div>
        {children}
      </body>
    </html>
  );
}
