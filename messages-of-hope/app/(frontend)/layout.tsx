import Footer from "@/components/frontend/footer";
import { Header } from "@/components/frontend/header";
import { ReactNode } from "react";
import "./frontend.css";

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
