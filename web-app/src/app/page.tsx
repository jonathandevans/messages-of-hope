import { Banner } from "@/components/panel/banner/banner";
import { TextPanel } from "@/components/panel/text-panel/text-panel";
import { CardPanel } from "@/components/panel/card-panel/card-panel";
import { ContactForm } from "@/components/panel/contact-form/contact-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/button/button";
import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <Banner image={"Speech at Connections 2024.jpg"}>
        <div className={styles.bannerContent}>
          <h3>Collecting your messages of hope and spreading them far and wide.</h3>
          <div className={styles.bannerButtons}>
            <Button href="/write-a-message" variant={{ size: "lg", colour: "blue" }}>Write a Message</Button>
            <Button href="/projects/connections-2024" variant={{ size: "lg", colour: "yellow"}}>Our Latest Project</Button>
          </div>
        </div>
      </Banner>

      <TextPanel className={styles.aboutPanel} title="About Messages of Hope" imageSrc="You're Loved - Connections 2024.jpg" imageAlt="'You're loved' written on a whiteboard at the Connections 2024 event">
        <p>Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. These messages become stickers and Instagram posts spread across the UK, aiming to improve mental health and support psychiatric patients.</p>
        <p>Messages of Hope is a Community Interest Company that was created to...</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Support people struggling with their mental health.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Spread hope.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Prevent suicide.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Encourage conversations around mental health.
          </li>
        </ul>
      </TextPanel>

      <CardPanel 
        title="What We Do"
        cards={[
          {
            title: "Collaborative Art Projects",
            imageSrc: "/Speech at Connections 2024.jpg",
            imageAlt: "",
            text: "You will often find us out, working in the community, asking strangers to write anonymous messages of hope on one of our canvases, which are then displayed in the local community.",
            href: "/projects/messages-of-hope-2023"
          },
          {
            title: "Bags of Hope",
            imageSrc: "/Speech at Connections 2024.jpg",
            imageAlt: "",
            text: "Bags of Hope is a project that is set up to give items to patients arriving on psychiatric wards. We ask for donations via our Amazon Wishlist, and we put these items into bags for patients to have when they arrive at psychiatric wards.",
            href: "/projects/bags-of-hope"
          },
          {
            title: "Video Projects",
            imageSrc: "/Speech at Connections 2024.jpg",
            imageAlt: "",
            text: "Messages of Hope often collaborates with other community organisations to create videos for mental health awareness days throughout the year. These videos will involve members of the public sharing their messages of hope.",
            href: "/projects/connections-2024"
          },
          {
            title: "Collecting Your Messages",
            imageSrc: "/Speech at Connections 2024.jpg",
            imageAlt: "",
            text: "You can submit a message of hope whenever you like via our website. We will then post the submitted messages of hope on our social media, or your message might be turned into a sticker and placed in various spots around the local community.",
            href: "/write-a-message"
          },
        ]} />

        <ContactForm title="Contact Us" text="Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you." />
    </>
  );
};
export default Page;
