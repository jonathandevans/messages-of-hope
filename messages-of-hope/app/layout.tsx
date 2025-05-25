import "./globals.css";

// Fonts
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
});

// Metadata
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased overflow-y-scroll`}>
        {children}
      </body>
    </html>
  );
}
