import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
    title: "Events",
    description:
        "Messages of Hope puts on numerous events throughout the year to further support our campaigns. These events over the years have included video projects, pop-up art events, and bag packing. From 2025, we're starting MOH socials, where we partner with other groups to organise several creative activities, such as Line of Hope setups and bag decorating for Bags of Hope, in a fun social environment.",
});

export default function Events() {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <section className="pb-12 pt-8 bg-moh-blue">
                <div className="max-w-(--section-width) mx-auto w-[90%] grid gap-4">
                    <h1 className="font-coiny text-5xl tracking-tighter">
                        Events
                    </h1>
                    <p>
                        Messages of Hope puts on numerous events throughout the
                        year to further support our campaigns. These events over
                        the years have included video projects, pop-up art
                        events, and bag packing. From 2025, we're starting MOH
                        socials, where we partner with other groups to organise
                        several creative activities, such as Line of Hope setups
                        and bag decorating for Bags of Hope, in a fun social
                        environment.
                    </p>
                </div>
            </section>

            <section className={styles.year}>
                <h2>
                    <span className={styles.left} />
                    2024
                    <span className={styles.right} />
                </h2>
                <div className={styles.content}>
                    <Link
                        className={styles.item}
                        href="/events/react-bag-packing-2024"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/react-boh.jpg"
                            alt="Bethan and Emmanuella standing behind a collection of Bags of Hope ready to be delivered"
                            width={3024}
                            height={4032}
                        />
                        <p>20th December 2024</p>
                        <h3>React Bag Packing</h3>
                    </Link>

                    <Link
                        className={styles.item}
                        href="/events/feeling-blue-2024"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/city-line.jpg"
                            alt="Line of Hope at Urdang"
                            width={3024}
                            height={4032}
                        />
                        <p>10th - 12th October 2024</p>
                        <h3>Feeling Blue?</h3>
                    </Link>

                    <Link
                        className={styles.item}
                        href="/events/connections-2024"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-2024.jpg"
                            alt="Connections 2024 filming at Convent Gardens London"
                            width={4800}
                            height={2649}
                        />
                        <p>26th January 2024</p>
                        <h3>Connections 2024</h3>
                    </Link>
                </div>
            </section>

            <section className={styles.year}>
                <h2>
                    <span className={styles.left} />
                    2023
                    <span className={styles.right} />
                </h2>
                <div className={styles.content}>
                    <Link
                        className={styles.item}
                        href="/events/mental-wealth-festival-2023"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/beth-messages.jpg"
                            alt=""
                            width={1536}
                            height={2048}
                        />
                        <p>12th October 2023</p>
                        <h3>Mental Wealth Festival 2023</h3>
                    </Link>

                    <Link
                        className={styles.item}
                        href="/events/messages-of-hope-2023"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/painted-pebbles.jpg"
                            alt="Painted pebbles from Messages of Hope 2023 pop-up art event"
                            width={5376}
                            height={3584}
                        />
                        <p>29th July 2023</p>
                        <h3>Messages of Hope 2023</h3>
                    </Link>

                    <Link
                        className={styles.item}
                        href="/events/thrive-ldn-partnership-2023"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/thrive-message.png"
                            alt=""
                            width={1942}
                            height={1920}
                        />
                        <p>15th May 2023</p>
                        <h3>Thrive LDN Partnership</h3>
                    </Link>
                </div>
            </section>

            <section className={styles.year}>
                <h2>
                    <span className={styles.left} />
                    2022
                    <span className={styles.right} />
                </h2>
                <div className={styles.content}>
                    <Link
                        className={styles.item}
                        href="/events/world-mental-health-day-2022"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/world-mental-health-day.jpg"
                            alt=""
                            width={864}
                            height={864}
                        />
                        <p>10th October 2022</p>
                        <h3>World Mental Health Day 2022</h3>
                    </Link>
                </div>
            </section>

            <section className={styles.year}>
                <h2>
                    <span className={styles.left} />
                    2020
                    <span className={styles.right} />
                </h2>
                <div className={styles.content}>
                    <Link
                        className={styles.item}
                        href="/events/messages-of-hope-2020"
                    >
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/moh-2020.jpg"
                            alt="Messages of Hope 2020 video"
                            width={864}
                            height={864}
                        />
                        <p>21st May 2020</p>
                        <h3>Messages of Hope 2020</h3>
                    </Link>
                </div>
            </section>
        </main>
    );
}
