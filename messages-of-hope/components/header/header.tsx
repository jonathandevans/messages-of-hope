"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";
import { Instagram } from "lucide-react";

const MobileNavigation = ({ close }: { close: () => void }) => {
  return (
    <nav className={styles.mobileNav}>
      <button className={styles.close} onClick={close}>
        <span />
        <span />
      </button>

      <div className={styles.innerNav}>
        <Link href="/" className={styles.mobileLogo}>
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
    </nav>
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
          </button>
        </div>

        {mobileNav ? (
          <MobileNavigation
            close={() => {
              setMobileNav(false);
            }}
          />
        ) : null}
      </div>
    </header>
  );
};
export default Header;
