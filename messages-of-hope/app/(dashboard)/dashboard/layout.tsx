import { Header } from "@/components/dashboard/header";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = generateMetadata({
  title: "Admin Dashboard",
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
