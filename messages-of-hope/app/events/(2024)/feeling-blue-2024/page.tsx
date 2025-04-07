import Banner from "@/components/banner/banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Feeling Blue?",
  description:
    "Feeling Blue? was a three day event in which Messages of Hope partnered with City of London University and the Urdang academy, and also attended the Mental Wealth Festival at City Lit. Over these three days we were able to support all three of our current campaigns, creating a Line of Hope at Urdang, donating 43 Bags of Hope from items donated by students, and collecting Messages of Hope from all three venues.",
});

const FeelingBlue = () => {
  return (
    <>
      <Banner
        title="Feeling Blue?"
        description="10th - 12th October 2024"
        backgroundCss={styles.banner}
      />

      <section className={styles.intro}>
        <div className={styles.text}>
          <h2>What is Feeling Blue?</h2>
          <p>
            Feeling Blue? was a three day event in which Messages of Hope
            partnered with City of London University and the Urdang academy, and
            also attended the Mental Wealth Festival at City Lit. Over these
            three days we were able to support all three of our current
            campaigns, creating a Line of Hope at Urdang, donating 43 Bags of
            Hope from items donated by students, and collecting Messages of Hope
            from all three venues.
          </p>
          <p>
            Working with university students at this event was so important, as
            these are young people who are at a point in life experiencing so
            much stress and change. Those of us at Messages of Hope have
            struggled with the pressures and isolation that university can
            bring.
          </p>
          <p>
            We want to give a special thank you to all those who wrote messages
            and donated items towards the Bags of Hope campaign.
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743973270/Screenshot_From_2025-04-06_21-57-45_tjijd0.png"
          alt=""
          width={1942}
          height={1543}
        />
      </section>

      <section className={styles.timeline}>
        <h2>Timeline</h2>

        <article>
          <h3>Thursday 10th October - City University of London</h3>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Throughout the day we were accepting donations for Bags of Hope
                and collecting messages of hope for students struggling with
                their mental health. I was a great opportunity for students to
                come and have a break from their day, have a moment of
                mindfulness, and share a feeling with those around them who
                might also need someone to listen to them.
              </p>
              <p>
                Students had the opportunity to build their own Line of Hope
                that they could check on throughout the day. This line was taken
                down, so all the messages could be used the next day at Urdang.
              </p>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743880333/IMG_2410_aq7vsx.jpg"
                alt=""
                width={3024}
                height={4032}
              />
            </div>
          </div>
        </article>

        <article>
          <h3>Friday 11th October - Urdang</h3>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                The item collection for Bags of Hope continued at Urdang, with
                the students writing messages to build a permanent Line of Hope
                installation. Students were also provided free prints and clay
                ornaments to take home. This was the heart of the Feeling Blue?
                event. On Friday 11th we asked students to donate £1 to wear
                blue. This fundraising event encourages you to take time and
                actually reflect on how you&apos;ve been feeling. Life can be very
                hectic and it&apos;s very easy to forget to check in ourselves.
              </p>
              <p>
                In the afternoon Urdang then hosted a Bags of Hope packing event
                using all the items donated by students over the previous 2
                days. This resulted in 43 Bags of Hope, all of which were
                donated to the Newham Centre for Mental Health.
              </p>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743975123/Screenshot_From_2025-04-06_22-31-42_zq41zb.png"
                alt=""
                width={1942}
                height={1543}
              />
            </div>
          </div>
        </article>

        <article>
          <h3>Saturday 12th October - Mental Wealth Festival</h3>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                Messages of Hope then attended the Mental Wealth Festival at
                City Lit on the final day. It was here that we collected more
                messages from the public as a part of the Messages of Hope
                campaign.
              </p>
            </div>

            <div className={styles.imageContainer}>
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743975250/Screenshot_From_2025-04-06_22-33-52_xoyb64.png"
                alt=""
                width={1942}
                height={1543}
              />
            </div>
          </div>
        </article>
      </section>

      <MessagePanel />
    </>
  );
};
export default FeelingBlue;
