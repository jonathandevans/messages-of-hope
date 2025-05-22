import Button from "@/components/frontend/button";
import { generateMetadata } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({ title: "Page Not Found" });

export default function NotFound() {
  return (
    <>
      <h2
        style={{
          margin: "4rem auto 1rem auto",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        404 | Not Found
      </h2>
      <Button href="/" colour="outline" style={{ margin: "0 auto" }}>
        Go Home <ArrowRight strokeWidth={3} size={16} />
      </Button>
    </>
  );
}
