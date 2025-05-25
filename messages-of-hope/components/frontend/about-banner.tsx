"use client";

import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  text: string[];
}

const links = [
  { href: "/our-work", title: "Our Work" },
  { href: "/our-story", title: "Our Story" },
  { href: "/our-team", title: "Our Team" },
];

export function AboutBanner({ title, image, text }: BannerProps) {
  const pathname = usePathname();

  return (
    <section className="bg-moh-blue">
      <div className="mx-auto max-w-7xl w-[90%] pt-4 pb-12 flex flex-col justify-center items-start gap-4">
        <div className="flex gap-2">
          {links.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "font-quicksand text-xs border-2 border-moh-dark-blue px-1.5 py-0.5 font-semibold rounded-md transition-all",
                pathname === item.href
                  ? "bg-moh-dark-blue text-moh-blue"
                  : "hover:bg-moh-dark-blue/20 text-moh-dark-blue"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 md:grid grid-cols-2 md:gap-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover h-72 max-w-lg w-full col-start-2 md:h-88 md:mx-auto"
          />

          <div className="flex flex-col justify-center items-start gap-3 row-start-1">
            <h1 className="font-coiny text-5xl tracking-tighter">{title}</h1>
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
