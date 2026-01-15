import styles from "./page.module.css";
import Image from "next/image";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import { EventBanner } from "@/components/event-banner";
import MessageBanner from "@/components/message-banner";

export const metadata: Metadata = generateMetadata({
    title: "Connections 2024",
    description:
        "Connections 2024 is a poignant short film created by Messages of Hope and Speakers Collective for Great Mental Health Day 2024. Connections delves into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.",
});

const Connections2024 = () => {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <EventBanner
                title="Connections 2024"
                description="26th January 2024"
                backgroundStyling={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-2024.jpg')",
                    backgroundPosition: "left 50% top 40%",
                }}
            />

            <section className={styles.text}>
                <h2>What is Connections 2024?</h2>
                <p>
                    Connections 2024 is a poignant short film created by
                    Messages of Hope and Speakers Collective for Great Mental
                    Health Day 2024. Connections delves into the transformative
                    power of connection amidst mental health struggles. Through
                    capturing the heartfelt messages penned by Londoners, the
                    film illuminates the profound sense of empathy and
                    solidarity within our communities. Each message serves as a
                    beacon of hope, affirming that even in the darkest moments,
                    there are individuals who genuinely care.
                </p>
                <p>
                    Our aspiration with Connections 2024 is to ignite a ripple
                    effect of compassion and support, encouraging viewers to
                    extend a hand of empathy to those in need and remind them
                    that they are never alone in their journey towards healing.
                </p>
                <p>
                    The evening of Great Mental Health Day 2024 saw the premiere
                    of Connections at City Lit in London. In addition to the
                    premiere viewing of Connections, City Lit displayed
                    photography captured throughout the Connections filming
                    process in their gallery from January 22nd to January 28th.
                </p>
            </section>

            <section className={styles.videos}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dFJHklUGYTU?si=vNRTEzGAvH8Pj0m-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/X8Cu-JvoXSc?si=k0cW5tOFjyUm7bHF"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </section>

            <section className={styles.text}>
                <h2>Who was involved?</h2>
                <p>
                    Connections 2024 was made possible through the generous
                    funding from The Mayor of London, Sadiq Khan, which we
                    believe reflects his commitment to fostering the mental
                    well-being of Londoners. Collaborating closely with Thrive
                    LDN and Speakers Collective, Messages of Hope orchestrated
                    the creation of this film, uniting diverse voices and
                    talents in a collective effort to spread messages of hope
                    and support.
                </p>
                <p>
                    People from all over London were involved in writing
                    messages of hope for Connections and we also worked with
                    several dancers, including the incredible Speaker Box Street
                    Party.
                </p>
                <p>
                    It was a huge honour to have been able to work with Speakers
                    Collective and have the support of both The Mayor of London,
                    Sadiq Khan, and Public Health Director, Kevin Fenton on
                    Connections 2024.
                </p>
            </section>

            <section className={styles.thanks}>
                <div className={styles.inner}>
                    <p>
                        We would like to give a special thanks to our incredible
                        volunteers that helped us bring Connections 2024
                        together. From approaching strangers to ask for messages
                        of hope, to dancing in the streets of London, they did
                        it all! Thank you again because without you, Connections
                        2024 wouldn&apos;t have been possible.
                    </p>
                </div>
            </section>

            <section className={styles.gallery}>
                <div className={styles.inner}>
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-message-foreign.jpg"
                        alt=""
                        width={4000}
                        height={6000}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/street-party.jpg"
                        alt=""
                        width={6000}
                        height={4000}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-dog.jpg"
                        alt=""
                        width={4748}
                        height={3165}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/costume-message.jpg"
                        alt=""
                        width={3550}
                        height={5325}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/beth-message.jpg"
                        alt=""
                        width={6000}
                        height={4000}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/heart-message.jpg"
                        alt=""
                        width={4000}
                        height={6000}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/family-message.jpg"
                        alt=""
                        width={5620}
                        height={3747}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-camera.jpg"
                        alt=""
                        width={4000}
                        height={6000}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/message-2.jpg"
                        alt=""
                        width={6000}
                        height={4000}
                    />
                </div>
            </section>

            <MessageBanner />
        </main>
    );
};
export default Connections2024;
