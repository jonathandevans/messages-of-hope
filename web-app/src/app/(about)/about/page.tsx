import { Metadata } from "next";
import { Banner } from "@/components/panel/banner/banner";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { TextPanel } from "@/components/panel/text-panel/text-panel";
import { Button } from "@/components/button/button";
import { generateMetadata } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  absolute: "About Messages of Hope",
  description:
    "Messages of Hope is a Community Interest Company dedicated to supporting individuals struggling with their mental health by encouraging people to write uplifting messages. These messages are transformed into stickers and Instagram posts, spreading positivity across the UK.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="About Messages of Hope"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697827/Filming_-_Connections_2024_1_muvkce.jpg"
        short={true}
      />

      <TextPanel
        contentClassName={styles.aboutPanel}
        title="What is MOH?"
        imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697954/Writing_a_Message_2_-_Connections_2024_1_l5cy7x.jpg"
        imageAlt="A group of people writing a message on a whiteboard during the filming of Connections 2024"
      >
        <p>
          Messages of Hope is a Community Interest Company dedicated to
          supporting individuals struggling with their mental health by
          encouraging people to write uplifting messages. These messages are
          transformed into stickers and Instagram posts, spreading positivity
          across the UK.
        </p>
        <p>
          We actively engage with the community, inviting strangers to write
          messages of hope. Whether through collaborative art projects, video
          initiatives, or our Bags of Hope, our mission is to inspire and uplift
          those facing mental health challenges. By collecting and sharing these
          messages, we aim to create a supportive network, showing that even
          small acts of kindness can make a significant impact.
        </p>
        <p>
          Through these varied initiatives, Messages of Hope strives to connect
          communities and provide a beacon of hope for anyone in need.
        </p>
        <Button className={styles.button} variant={{ colour: "yellow" }}>
          Write a Message
        </Button>
      </TextPanel>

      <TextPanel
        contentClassName={styles.aboutPanel}
        title="What does MOH do?"
        imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726698087/Speaker_Box_Street_Party_-_Connections_2024_1_omqcbu.jpg"
        imageAlt="Speaker Box Street Party dancing at the Connections 2024 event"
        variant={{
          textPosition: "right",
          colour: "blue",
          deco: ["topLeft", "bottomRight"],
          corner: "topRight",
        }}
      >
        <p>
          As a community organisation, Messages of Hope is committed to
          improving individuals' mental health and well-being throughout England
          and Wales. We actively support patients arriving at hospitals for
          psychiatric admissions, ensuring they receive essential items and
          compassionate care through our Bags of Hope project.
        </p>
        <p>
          We organise and run various projects throughout the year, each
          designed to connect communities through creativity and collective
          empathy. Our initiatives include collaborative art pieces, video
          projects for mental health awareness days, and public displays of
          messages of hope. These efforts uplift those in need and foster a
          sense of unity and support within the community.
        </p>
        <p>
          Visit our projects page to learn more about the diverse work Messages
          of Hope undertakes and how you can get involved in spreading
          positivity and hope.
        </p>
        <Button className={styles.button} variant={{ colour: "blue" }}>
          Our Projects
        </Button>
      </TextPanel>

      <MessageSlideshow />
    </>
  );
};
export default Page;
