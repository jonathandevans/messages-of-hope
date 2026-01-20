import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import { EventBanner } from "@/components/event-banner";
import MessageBanner from "@/components/message-banner";

export const metadata: Metadata = generateMetadata({
    title: "Mental Wealth Festival 2023",
    description:
        "Messages of Hope hosted a very successful project at City Lit on the 12th October 2023 as part of their Mental Wealth Festival. The afternoon was spent encouraging individuals to write messages of hope for people struggling with their mental health in order to fill a canvas that will be displayed in City Lit.",
        path: "/events/mental-wealth-festival-2023",
});

const MentalWealthFestival2023 = () => {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <EventBanner
                title="Mental Wealth Festival 2023"
                description="12th October 2023"
                backgroundStyling={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/beth-messages.jpg')",
                    backgroundPosition: "left 50% top 70%",
                }}
            />

            <section className={styles.panel}>
                <div className={styles.text}>
                    <p>
                        Messages of Hope hosted a very successful project at
                        City Lit on the 12th October 2023 as part of their
                        Mental Wealth Festival. The afternoon was spent
                        encouraging individuals to write messages of hope for
                        people struggling with their mental health in order to
                        fill a canvas that will be displayed in City Lit.
                    </p>
                    <p>
                        In addition to our usual message writing we also
                        encouraged people to colour in the emotion they were
                        feeling in order to create a colourful collaborative art
                        piece. Each colour was assigned an emotion and members
                        of the public were encouraged to colour in the canvas as
                        they please. City Lit&apos;s Mental Wealth Festival was
                        an incredible opportunity for us to connect with other
                        creatives that use art and creativity to aid their
                        mental health and well-being.
                    </p>
                    <p>
                        To view these canvases, make sure you visit City Lit
                        next time you&apos;re in London. Be sure to follow{" "}
                        <a
                            href="https://www.instagram.com/messagesof.hope/"
                            target="_blank"
                        >
                            @messagesof.hope
                        </a>{" "}
                        on Instagram in order to see the anonymous message that
                        you wrote, posted.
                    </p>
                </div>

                <Image
                    src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/mood-canvas.jpg"
                    alt=""
                    width={1200}
                    height={1600}
                />
            </section>

            <MessageBanner />
        </main>
    );
};
export default MentalWealthFestival2023;
