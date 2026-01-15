import { Facebook, Instagram, MailOpen } from "lucide-react";
import Button from "@components/button";
import styles from "@components/custom-css/footer.module.css";

export default function Footer() {
    return (
        <footer className="bg-moh-dark-blue my-4 py-8">
            <div className="flex w-[90%] max-w-(--section-width) mx-auto flex-col items-center justify-between gap-8 md:grid md:gap-2 md:grid-cols-[1fr_1fr_1fr]">
                <div className={styles.sitemap}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/write-a-message">Write a Message</a>
                        </li>
                        <li>
                            <a href="/get-involved">Get Involved</a>
                        </li>
                        <li>
                            <a href="/colouring-pages">Colouring Pages</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/our-work">Our Work</a>
                        </li>
                        <li>
                            <a href="/our-story">Our Story</a>
                        </li>
                        <li>
                            <a href="/our-team">Our Team</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/campaigns">Campaigns</a>
                        </li>
                        <li>
                            <a href="/bags-of-hope">Bags of Hope</a>
                        </li>
                        <li>
                            <a href="/line-of-hope">Line of Hope</a>
                        </li>
                        <li>
                            <a href="/messages-of-hope">Messages of Hope</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/events">Events</a>
                        </li>
                        <li>
                            <a href="/events/react-bag-packing-2024">
                                React Bag Packing
                            </a>
                        </li>
                        <li>
                            <a href="/events/feeling-blue-2024">Feeling Blue</a>
                        </li>
                        <li>
                            <a href="/events/connections-2024">
                                Connections 2024
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.buttons}>
                    <div className="flex gap-2 text-zinc-100">
                        <a
                            href="https://www.instagram.com/messagesof.hope/"
                            aria-label="Instagram"
                            target="_blank"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Messages-of-Hope/100087952429971/"
                            aria-label="Facebook"
                            target="_blank"
                        >
                            <Facebook />
                        </a>
                        <a
                            href="mailto:contact@messagesofhope.co.uk"
                            aria-label="Email Us"
                        >
                            <MailOpen />
                        </a>
                    </div>

                    <Button href="/write-a-message" colour="yellow">
                        Write a Message
                    </Button>
                    <Button href="/events/react-bag-packing-2024">
                        Our Latest Event
                    </Button>
                </div>

                <div className={styles.details}>
                    <p>Messages of Hope (MOH) C.I.C</p>
                    <p>Company Number 15299854</p>
                    <p>contact@messagesofhope.co.uk</p>
                </div>

                <div className={styles.copyright}>
                    <p>
                        All rights reserved © 2023-26 Messages of Hope. We are a
                        registered community interest company in England and
                        Wales.
                    </p>
                    <a href="/privacy-policy" target="_blank">
                        {" "}
                        privacy policy{" "}
                    </a>
                </div>
            </div>
        </footer>
    );
}
