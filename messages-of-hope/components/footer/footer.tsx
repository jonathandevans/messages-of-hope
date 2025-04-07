import Link from "next/link";
import styles from "./footer.module.css";
import Button from "../ui/button/button";
import { ArrowRight, Facebook, Instagram, MailOpen } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.sitemap}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/write-a-message">Write a Message</Link>
              </li>
              <li>
                <Link href="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link href="/colouring-pages">Colouring Pages</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/our-work">Our Work</Link>
              </li>
              <li>
                <Link href="/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/our-team">Our Team</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/campaigns">Campaigns</Link>
              </li>
              <li>
                <Link href="/bags-of-hope">Bags of Hope</Link>
              </li>
              <li>
                <Link href="/line-of-hope">Line of Hope</Link>
              </li>
              <li>
                <Link href="/messages-of-hope">Messages of Hope</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/events/react-bag-packing-2024">React Bag Packing</Link>
              </li>
              <li>
                <Link href="/events/feeling-blue-2024">Feeling Blue</Link>
              </li>
              <li>
                <Link href="/events/connections-2024">Connections 2024</Link>
              </li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <Button href="/write-a-message" colour="yellow">
              Write a Message
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
            <Button href="/events/react-bag-packing-2024">
              Our Latest Event
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </div>

          <div className={styles.details}>
            <p>Messages of Hope (MOH) C.I.C</p>
            <p>Company Number 15299854</p>
            <p>contact@messagesofhope.co.uk</p>
          </div>

          <div className={styles.copyright}>
            <p>
              All rights reserved © 2023-25 Messages of Hope. We are a
              registered community interest company in England and Wales.
            </p>
            <Link href="/privacy-policy" target="_blank">
              privacy policy
            </Link>
          </div>
        </div>
      </footer>

      <div className={styles.socials}>
        <Link
          href="mailto:contact@messagesofhope.co.uk"
          className={styles.email}
          target="_blank"
        >
          <MailOpen size={24} strokeWidth={2} />
        </Link>
        <Link
          href="https://www.instagram.com/messagesof.hope/"
          className={styles.instagram}
          target="_blank"
        >
          <Instagram size={24} strokeWidth={2} />
        </Link>
        <Link
          href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/"
          className={styles.facebook}
          target="_blank"
        >
          <Facebook size={24} strokeWidth={2} />
        </Link>
      </div>
    </>
  );
};
export default Footer;
