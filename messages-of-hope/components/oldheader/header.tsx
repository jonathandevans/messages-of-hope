"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { useState } from "react";

const MobileNavigation = () => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743695574/Messages_of_Hope_Logo_1_pv4sth_o3k9jq.png"
            alt="Messages of Hope Logo"
            width={5635}
            height={2152}
          />
        </Link>
        <Link href="/our-work">About</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/events">Events</Link>
        <Link href="/write-a-message">Write a Message</Link>
        <Link href="/get-involved">Get Involved</Link>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link className={styles.logo} href="/">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743695574/Messages_of_Hope_Logo_1_pv4sth_o3k9jq.png"
              alt="Messages of Hope Logo"
              width={5635}
              height={2152}
            />
          </Link>

          <Link className={styles.desktop} href="/our-work">
            About
          </Link>
          <Link className={styles.desktop} href="/campaigns">
            Campaigns
          </Link>
          <Link className={styles.desktop} href="/events">
            Events
          </Link>
          <Link className={styles.desktop} href="/write-a-message">
            Write a Message
          </Link>
          <Link className={styles.desktop} href="/get-involved">
            Get Involved
          </Link>
        </div>

        <div className={styles.right}>
          <Link
            className={styles.desktop}
            href="https://www.instagram.com/messagesof.hope/"
          >
            <Instagram size={16} strokeWidth={2} />
            Instagram
          </Link>

          <button
            className={`${styles.hamburger} ${mobileNav ? styles.open : ""}`}
            aria-label="Hamburger menu"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            <span />
            <span />
            <span />
            <span />
          </button>

          {mobileNav ? <MobileNavigation /> : null}
        </div>
      </div>
    </header>
  );
};
export default Header;
