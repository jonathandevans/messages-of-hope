import { Metadata } from "next";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";
import MessageBanner from "@/components/message-banner";
import { EventBanner } from "@/components/event-banner";

export const metadata: Metadata = generateMetadata({
    title: "Thrive LDN Partnership",
    description:
        "Monday 15th May 2023 marks the beginning of an exciting collaboration between Thrive LDN and Messages of Hope. Thrive LDN is a citywide public mental health partnership to ensure all Londoners have an equal opportunity for good mental health and wellbeing. Launched during Mental Health Awareness Week 2023 and aligning with Thrive LDN's Getting Through This Together campaign, the collaboration will see anonymous messages submitted by Londoners shared daily.",
    path: "/events/thrive-ldn-partnership-2023",
});

const ThriveLDNPartnership2023 = () => {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <EventBanner
                title="Thrive LDN Partnership"
                description="15th May 2023"
                backgroundStyling={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/thrive-message.png')",
                    backgroundPosition: "left 50% top 4%",
                }}
            />

            <section className={styles.panel}>
                <p>
                    Monday 15th May 2023 marks the beginning of an exciting
                    collaboration between Thrive LDN and Messages of Hope.
                    Thrive LDN is a citywide public mental health partnership to
                    ensure all Londoners have an equal opportunity for good
                    mental health and wellbeing.
                </p>
            </section>

            <section className={styles.highlight}>
                <p>
                    Messages of Hope and Thrive LDN are working together to
                    bring hundreds of submissions to life in new collaboration.
                </p>
            </section>

            <section className={styles.panel}>
                <p>
                    Launched during Mental Health Awareness Week 2023 and
                    aligning with Thrive LDN&apos;s Getting Through This
                    Together campaign, the collaboration will see anonymous
                    messages submitted by Londoners shared daily. The hundreds
                    of anonymous messages have been submitted from Londoners,
                    many who have experienced their own difficulties and
                    challenges and who want to share words of advice and
                    encouragement for anyone that might be struggling. Many of
                    the submissions contain personal positive affirmations
                    alongside well-known messages of encouragement or wisdom.
                </p>
                <p>
                    The collaboration began in October 2022 during World Mental
                    Health Day 2022 both online and on the day at London&apos;s
                    City Hall as part of the Never Alone LDN festival. The
                    project was a way of offering Londoners an opportunity to
                    connect and share experiences through messages written by
                    those living and working in the city.
                </p>
                <p>
                    The next stage in the collaboration aims to bring these
                    messages to life by sharing them publicly though Instagram.
                    Aiming to encourage the conversation around mental health
                    and help to break the stigma that surrounds it. As well as
                    highlighting professional and urgent support available for
                    anyone that may need it.
                </p>
                <p>
                    Visit{" "}
                    <a href="https://thriveldn.co.uk/" target="_blank">
                        thriveldn.co.uk
                    </a>{" "}
                    for more information regarding their work.
                </p>
            </section>

            <MessageBanner />
        </main>
    );
};
export default ThriveLDNPartnership2023;
