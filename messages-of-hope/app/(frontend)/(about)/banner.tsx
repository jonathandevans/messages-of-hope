"use client";

import Link from "next/link";
import styles from "./banner.module.css";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { usePathname } from "next/navigation";

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

const Banner = ({ title, image, text }: BannerProps) => {
  const pathname = usePathname();

  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link className={pathname.endsWith("/our-work") ? styles.active : ""} href="/our-work">
            Our Work
          </Link>
          <Link className={pathname.endsWith("/our-story") ? styles.active : ""} href="/our-story">Our Story</Link>
          <Link className={pathname.endsWith("/our-team") ? styles.active : ""} href="/our-team">Our Team</Link>
        </div>

        <div className={styles.base}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />

          <div className={styles.content}>
            <h1>{title}</h1>
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
