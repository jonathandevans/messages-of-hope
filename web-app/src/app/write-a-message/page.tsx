import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { MessageSubmission } from "./message-submission";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Write a Message",
  description:
    "Write a message of hope to share with the world. Messages of Hope collects messages of hope and spreads them far and wide.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="Write a Message"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg"
        short={true}
      />

      <MaxWidthWrapper className={styles.panel}>
        <p>
          Write a message of hope for someone struggling with their mental
          health. Your message could be the one that makes a difference in
          someone's life. Messages of Hope collects messages of hope and spreads
          them far and wide. Keep an eye on our social media pages to see if
          your message is shared.
        </p>
        <p>
          If you'd like us to tag you on social media when your message of hope
          is posted, leave your Instagram handle below. Please note, this is
          optional and if you'd like your message of hope to remain anonymous
          just leave it blank. Thank you for your help in spreading hope.
        </p>

        <MessageSubmission />
      </MaxWidthWrapper>

      <MessageSlideshow />
    </>
  );
};
export default Page;
