import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import { EventBanner } from "@/components/event-banner";
import MessageBanner from "@/components/message-banner";

export const metadata: Metadata = generateMetadata({
    title: "World Mental Health Day 2022",
    description:
        "On the 10th October 2022, Messages of Hope was invited to be a part of Thrive LDNs World Mental Health Day event called Never Alone LDN in City Hall, London. Our aim for this event was to create a mural that displayed anonymous messages of hope that could be showcased at City Hall, and that's exactly what we did. We were able to collect over 200 messages for this event and approximately 50 messages from attendees of the event, on the day.",
        path: "/events/world-mental-health-day-2022",
});

const WorldMentalHealthDay2022 = () => {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <EventBanner
                title="World Mental Health Day 2022"
                description="10th October 2022"
                backgroundStyling={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/world-mental-health-day.jpg')",
                    backgroundPosition: "left 50% top 40%",
                }}
            />

            <section className={styles.panel}>
                <div className={styles.text}>
                    <p>
                        On the 10th October 2022, Messages of Hope was invited
                        to be a part of Thrive LDNs World Mental Health Day
                        event called Never Alone LDN in City Hall, London.
                    </p>
                    <p>
                        Our aim for this event was to create a mural that
                        displayed anonymous messages of hope that could be
                        showcased at City Hall, and that&apos;s exactly what we
                        did. We were able to collect over 200 messages for this
                        event and approximately 50 messages from attendees of
                        the event, on the day.
                    </p>
                    <p>
                        Following the event we continue to share the messages
                        that were collected for this project.
                    </p>
                </div>

                <Image
                    src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/wrote-a-message.jpg"
                    alt=""
                    width={3375}
                    height={3375}
                />
            </section>

            <MessageBanner />
        </main>
    );
};
export default WorldMentalHealthDay2022;
