import { Banner } from "@/components/panel/banner/banner";
import { TextPanel } from "@/components/panel/text-panel/text-panel";
import { CardPanel } from "@/components/panel/card-panel/card-panel";
import { ContactForm } from "@/components/panel/contact-form/contact-form";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { LinkGrid } from "@/components/panel/link-grid/link-grid";
import { Button } from "@/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

import { FeelingBlue } from "@/components/feeling-blue/feeling-blue";

const Page = () => {
  return (
    <>
      <FeelingBlue />

      <Banner image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg">
        <div className={styles.bannerContent}>
          <h3>
            Collecting your messages of hope and spreading them far and wide.
          </h3>
          <div className={styles.bannerButtons}>
            <Button
              href="/write-a-message"
              variant={{ size: "lg", colour: "blue" }}
            >
              Write a Message
            </Button>
            <Button
              href="/projects/connections-2024"
              variant={{ size: "lg", colour: "yellow" }}
            >
              Our Latest Project
            </Button>
          </div>
        </div>
      </Banner>

      <TextPanel
        className={styles.aboutPanel}
        title="About Messages of Hope"
        imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694064/You_re_Loved_-_Connections_2024_2_nwli5g.jpg"
        imageAlt="'You're loved' written on a whiteboard at the Connections 2024 event"
      >
        <p>
          Messages of Hope is a Community Interest Company encouraging people to
          write hopeful messages for those struggling with mental health. These
          messages become stickers and Instagram posts spread across the UK,
          aiming to improve mental health and support psychiatric patients.
        </p>
        <p>
          Messages of Hope is a Community Interest Company that was created
          to...
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Support
            people struggling with their mental health.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Spread
            hope.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Prevent
            suicide.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} /> Encourage
            conversations around mental health.
          </li>
        </ul>
      </TextPanel>

      <CardPanel
        title="What We Do"
        cards={[
          {
            title: "Collaborative Art Projects",
            imageSrc:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694313/Writing_a_Message_-_MOH_2023_1_ebwwtg.jpg",
            imageAlt:
              "A child writing a message on a canvas at the Messages of Hope 2023 event",
            text: "You will often find us out, working in the community, asking strangers to write anonymous messages of hope on one of our canvases, which are then displayed in the local community.",
            href: "/projects/messages-of-hope-2023",
          },
          {
            title: "Bags of Hope",
            imageSrc:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694192/Smile_-_Connections_2024_1_1_puq98r.jpg",
            imageAlt:
              "A graffiti smile at the filming location of the Connections 2024 event ",
            text: "Bags of Hope is a project that is set up to give items to patients arriving on psychiatric wards. We ask for donations via our Amazon Wishlist, and we put these items into bags for patients to have when they arrive at psychiatric wards.",
            href: "/projects/bags-of-hope",
          },
          {
            title: "Video Projects",
            imageSrc:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/c_crop,ar_1:1/v1726694454/A_Message_-_Connections_2024_1_k1uxys.jpg",
            imageAlt:
              "A woman holding a whiteboard with the message \"Millions of people said the world was flat. They were wrong. Don't listen to others you're worth it.\"",
            text: "Messages of Hope often collaborates with other community organisations to create videos for mental health awareness days throughout the year. These videos will involve members of the public sharing their messages of hope.",
            href: "/projects/connections-2024",
          },
          {
            title: "Collecting Your Messages",
            imageSrc:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694655/Writing_a_Message_-_Connections_2024_1_1_z5u3a0.jpg",
            imageAlt:
              "A group of young people writing a message on a whiteboard at the Connections 2024 event",
            text: "You can submit a message of hope whenever you like via our website. We will then post the submitted messages of hope on our social media, or your message might be turned into a sticker and placed in various spots around the local community.",
            href: "/write-a-message",
          },
        ]}
      />

      <ContactForm
        title="Contact Us"
        text="Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you."
      />

      <LinkGrid
        title="Projects"
        name="Connections 2024"
        text={[
          "Connections 2024 is a poignant short film created by Messages of Hope and Speakers Collective for Great Mental Health Day 2024. Connections delves into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.",
          "Our aspiration with Connections 2024 is to ignite a ripple effect of compassion and support, encouraging viewers to extend a hand of empathy to those in need and remind them that they are never alone in their journey towards healing.",
        ]}
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694766/Connections_2024_1_v2pakd.jpg"
        imageAlt="The filming of Connections 2024"
        href="/projects/connections-2024"
        additionalLinksTitle="Other Projects"
        additionalLinks={[
          {
            title: "Bags of Hope",
            href: "/projects/bags-of-hope",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694833/Bags_of_Hope_1_kxut4v.jpg",
          },
          {
            title: "Messages of Hope 2023",
            href: "/projects/messages-of-hope-2023",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694912/Messages_of_Hope_2023_1_rpedc7.jpg",
          },
          {
            title: "Colouring Pages",
            href: "/projects/colouring-pages",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697424/Colouring_Pages_1_qgyern.jpg",
          },
          {
            title: "Messages of Hope 2020",
            href: "/projects/messages-of-hope-2020",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697536/Messages_of_Hope_2020_1_w82msv.jpg",
          },
        ]}
        forwardLinkLabel="All Projects"
        forwardLinkHref="/projects"
      />

      <MessageSlideshow />
    </>
  );
};
export default Page;
