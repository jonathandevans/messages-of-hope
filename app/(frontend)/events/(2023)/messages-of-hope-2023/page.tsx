import styles from "./page.module.css";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import Image from "next/image";
import { EventBanner } from "@/components/event-banner";
import MessageBanner from "@/components/message-banner";

export const metadata: Metadata = generateMetadata({
    title: "Messages of Hope 2023",
    description:
        "On the 29th of July 2023, Messages of Hope hosted a transformative collaborative art project at Barry Island. People of all ages, from children to adults, left their marks on pre-prepared canvases, filling them with messages of hope and encouragement.",
        path: "/events/messages-of-hope-2023",
});

const MessagesOfHope2023 = () => {
    return (
        <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
            <EventBanner
                title="Messages of Hope 2023"
                description="29th July 2023"
                backgroundStyling={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/painted-pebbles.jpg')",
                    backgroundPosition: "left 50% top 90%",
                }}
            />

            <section className={styles.panel}>
                <div className={styles.text}>
                    <p>
                        On the 29th of July 2023, Messages of Hope hosted a
                        transformative collaborative art project at Barry
                        Island, which turned out to be a resounding success. The
                        event saw an overwhelming outpouring of support, with
                        over 200 heartfelt messages collected and countless
                        inspiring and empowering conversations shared. People of
                        all ages, from children to adults, left their marks on
                        pre-prepared canvases, filling them with messages of
                        hope and encouragement.
                    </p>
                    <p>
                        Beyond the canvases, attendees had the opportunity to
                        write their messages on pebbles, adding a unique touch
                        to the project. A dedicated colouring station provided a
                        space for mindfulness and creativity, allowing
                        participants to take a peaceful break and express their
                        hopes through art.
                    </p>
                    <p>
                        We are immensely grateful to everyone who supported and
                        participated in this campaign. Your contributions have
                        created a tapestry of hope that we are excited to share
                        with the broader community. You can view the finished
                        canvases at the Barry YMCA in The Vale of Glamorgan, a
                        testament to the collective spirit of hope and
                        resilience.
                    </p>
                </div>

                <div className={styles.images}>
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/beth-2023.jpg"
                        alt=""
                        width={5376}
                        height={2497}
                    />
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/canvas-painting.jpg"
                        alt=""
                        width={5376}
                        height={3584}
                    />
                </div>
            </section>

            <Image
                src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/barry-ymca.jpg"
                alt=""
                width={4032}
                height={3024}
                className={styles.finish}
            />

            <MessageBanner />
        </main>
    );
};
export default MessagesOfHope2023;
