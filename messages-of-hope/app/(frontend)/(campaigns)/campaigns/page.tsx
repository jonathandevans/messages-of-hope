import { Metadata } from "next";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";
import Link from "next/link";
import MessagePanel from "@/components/frontend/messages-panel";

export const metadata: Metadata = generateMetadata({
  title: "Campaigns",
  description:
    "The campaigns Messages of Hope organise are a form of long term projects that has been created to support our goals as a CIC. These campaigns are used as a part of events, for example at MOH Socials we will do Bags of Hope bag packing, or create a new Line of Hope. The pop-up art events that we do all go to support the original Messages of Hope campaign.",
});

const Campaigns = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Campaigns</h1>
          <p>
            The campaigns Messages of Hope organise are a form of long term
            projects that has been created to support our goals as a CIC. These
            campaigns are used as a part of events, for example at MOH Socials
            we will do Bags of Hope bag packing, or create a new Line of Hope.
            The pop-up art events that we do all go to support the original
            Messages of Hope campaign. All of these campaigns focus on using
            creativity to bring people together, which is at the very heart of
            what Messages of Hope does.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <Link href="/bags-of-hope" className={styles.bags}>
          <h2>Bags of Hope</h2>
          <p>Because no patient should feel alone</p>
        </Link>
        <Link href="/line-of-hope" className={styles.lines}>
          <h2>Line of Hope</h2>
          <p>When you need a lifeline</p>
        </Link>
        <Link href="/messages-of-hope" className={styles.messages}>
          <h2>Messages of Hope</h2>
          <p>Reaching out to support each other</p>
        </Link>
      </section>

      <MessagePanel />
    </>
  );
};
export default Campaigns;
