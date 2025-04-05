import { Metadata } from "next";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";
import Link from "next/link";
import MessagePanel from "@/components/messages-panel/messages-panel";

export const metadata: Metadata = generateMetadata({
  title: "Campaigns",
  description: "",
});

const Campaigns = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Campaigns</h1>
          <p>
            Messages of Hope is a Community Interest Company encouraging people
            to write hopeful messages for those struggling with mental health.
            We organise a range of projects each year, each designed to connect
            communities through creativity and collective empathy. Our
            initiatives include collaborative art pieces, video projects for
            mental health awareness days, and public displays of messages of
            hope.
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
