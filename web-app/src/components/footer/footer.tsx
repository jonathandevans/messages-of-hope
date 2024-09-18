import Link from "next/link";
import styles from "./footer.module.css";
import { Button } from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <svg aria-hidden="true" className={styles.topBorder} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 16" preserveAspectRatio="none">
        <g data-name="Layer 1">
          <rect style={{ strokeWidth: 0, fill: "var(--blue-300)", height: 16, width: "100%" }}/>
          <path style={{ strokeWidth: 0, fill: "var(--blue-800)" }} d="M266,0h908c8.83,0,16,7.17,16,16H250c0-8.83,7.17-16,16-16Z"/>
          <path style={{ strokeWidth: 0, fill: "var(--yellow-400)" }} d="M437,0h566c8.83,0,16,7.17,16,16H421c0-8.83,7.17-16,16-16Z"/>
        </g>
      </svg>

      <div className={styles.panel}>
        <div className={styles.nav}>
          <ul>
            <li><Link href="/"><b><u>Home</u></b></Link></li>
            <li><Link href="/write-a-message">Write a Message</Link></li>
            <li><Link href="/support-us">Support Us</Link></li>
          </ul>
          <ul>
            <li><Link href="/projects"><b><u>Projects</u></b></Link></li>
            <li><Link href="/projects/connections-2024">Connections 2024</Link></li>
            <li><Link href="/projects/bags-of-hope">Bags of Hope</Link></li>
            <li><Link href="/projects/messages-of-hope-2023">Messages of Hope 2023</Link></li>
          </ul>
          <ul>
            <li><Link href="/about"><b><u>About</u></b></Link></li>
            <li><Link href="/our-team">Our Team</Link></li>
            <li><Link href="/our-creator">Our Creator</Link></li>
          </ul>
        </div>

        <div className={styles.buttons}>
          <Button href="/write-a-message" variant={{ size: "md", colour: "blue" }}>Write a Message</Button>
          <Button href="/projects/connections-2024" variant={{ size: "md", colour: "yellow"}}>Our Latest Project</Button>
        </div>
      </div>

      <div className={styles.panel2}>
        <div className={styles.inner}>
          <div className={styles.links}>
            <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726428188/Messages%20of%20Hope%20Logo.png" alt="Messages of Hope Logo" />
            <div>
              <p>All rights reserved © 2024 Messages of Hope. We are a registered community interest company.</p>
              <Link href="/privacy-policy">privacy policy</Link>
            </div>
          </div>

          <div className={styles.info}>
            <p>Messages of Hope (MOH) C.I.C</p>
            <p>Company Number 15299854</p>
            <p>contact@messagesofhope.co.uk</p>
          </div>
        </div>
      </div>

      <div className={styles.panel3}>
        <a className={styles.social} href="mailto:contact@messagesofhope.co.uk" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </a>
        <a className={styles.social} href="https://www.instagram.com/messagesof.hope/" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        </a>
        <a className={styles.social} href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
        </a>
      </div>
    </footer>
  );
};