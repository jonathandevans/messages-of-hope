import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import styles from "./page.module.css";
import { MessageSubmission } from "./message-submission";

const Page = () => {
  return (
    <>
      <Banner title="Write a Message" image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726418543/Speech%20at%20Connections%202024.jpg" short={true} />

      <MaxWidthWrapper className={styles.panel}>
        <p>Write a message of hope for someone struggling with their mental health. Your message could be the one that makes a difference in someone's life. Messages of Hope collects messages of hope and spreads them far and wide. Keep an eye on our social media pages to see if your message is shared.</p>
        <p>We do have an option for you to send us you Instagram handle along with your message, but this is not required.</p>

        <MessageSubmission />
      </MaxWidthWrapper>

      <MessageSlideshow />
    </>
  );
};
export default Page;