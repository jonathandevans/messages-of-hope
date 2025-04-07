import { Metadata } from "next";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import MessageSubmission from "./message-submission";

export const metadata: Metadata = generateMetadata({
  title: "Write a Message",
  description:
    "Write a message of hope for someone struggling with their mental health. Your message could be the one that makes a difference in someone's life. Messages of Hope collects messages of hope and spreads them far and wide. Keep an eye on our social media pages to see if your message is shared.",
});

const WriteAMessage = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743857156/world-mental-health-day-2022_uzm0zm.jpg"
            alt="A crate filled with handwritten messages"
            width={3375}
            height={3375}
          />

          <div className={styles.content}>
            <h1>Write a Message</h1>
            <p>
              Write a message of hope for someone struggling with their mental
              health. Your message could be the one that makes a difference in
              someone&apos;s life. Messages of Hope collects messages of hope and
              spreads them far and wide. Keep an eye on our social media pages
              to see if your message is shared.
            </p>
            <p>
              If you&apos;d like us to tag you on social media when your message of
              hope is posted, leave your Instagram handle below. Please note,
              this is optional and if you&apos;d like your message of hope to remain
              anonymous just leave it blank. Thank you for your help in
              spreading hope.
            </p>
          </div>
        </div>
      </section>

      <MessageSubmission />

      <MessagePanel />
    </>
  );
};
export default WriteAMessage;
