import Banner from "@/components/banner/banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "World Mental Health Day 2022",
  description:
    "On the 10th October 2022, Messages of Hope was invited to be a part of Thrive LDNs World Mental Health Day event called Never Alone LDN in City Hall, London. Our aim for this event was to create a mural that displayed anonymous messages of hope that could be showcased at City Hall, and that's exactly what we did. We were able to collect over 200 messages for this event and approximately 50 messages from attendees of the event, on the day.",
});

const WorldMentalHealthDay2022 = () => {
  return (
    <>
      <Banner
        title="World Mental Health Day 2022"
        description="10th October 2022"
        backgroundCss={styles.banner}
      />

      <section className={styles.panel}>
        <div className={styles.text}>
          <p>
            On the 10th October 2022, Messages of Hope was invited to be a part
            of Thrive LDNs World Mental Health Day event called Never Alone LDN
            in City Hall, London.
          </p>
          <p>
            Our aim for this event was to create a mural that displayed
            anonymous messages of hope that could be showcased at City Hall, and
            that's exactly what we did. We were able to collect over 200
            messages for this event and approximately 50 messages from attendees
            of the event, on the day.
          </p>
          <p>
            Following the event we continue to share the messages that were
            collected for this project.
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743857156/world-mental-health-day-2022_uzm0zm.jpg"
          alt=""
          width={3375}
          height={3375}
        />
      </section>

      <MessagePanel />
    </>
  );
};
export default WorldMentalHealthDay2022;
