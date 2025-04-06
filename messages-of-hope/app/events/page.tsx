import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Events",
  description:
    "Messages of Hope puts on numerous events throughout the year to further support our campaigns. These events over the years have included video projects, pop-up art events, and bag packing. From 2025, we're starting MOH socials, where we partner with other groups to organise several creative activities, such as Line of Hope setups and bag decorating for Bags of Hope, in a fun social environment.",
});

const Events = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Events</h1>
          <p>
            Messages of Hope puts on numerous events throughout the year to
            further support our campaigns. These events over the years have
            included video projects, pop-up art events, and bag packing. From
            2025, we're starting MOH socials, where we partner with other groups
            to organise several creative activities, such as Line of Hope setups
            and bag decorating for Bags of Hope, in a fun social environment.
          </p>
        </div>
      </section>

      <section className={styles.year}>
        <h2>
          <span className={styles.left} />
          2024
          <span className={styles.right} />
        </h2>
        <div className={styles.content}>
          <Link className={styles.item} href="/events/react-bag-packing-2024">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743592893/IMG_1599_wpo5wq.jpg"
              alt="Bethan and Emmanuella standing behind a collection of Bags of Hope ready to be delivered"
              width={3024}
              height={4032}
            />
            <p>20th December 2024</p>
            <h3>React Bag Packing</h3>
          </Link>

          <Link className={styles.item} href="/events/feeling-blue-2024">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743890174/EB3939A3-BAEA-4436-850A-39BA150A3750_sy9u6g.jpg"
              alt="Line of Hope at Urdang"
              width={3024}
              height={4032}
            />
            <p>10th - 12th October 2024</p>
            <h3>Feeling Blue?</h3>
          </Link>

          <Link className={styles.item} href="/events/connections-2024">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743549732/eT3lf4bF2M_tl9glu_1_hmnuzy_rgpkdl.jpg"
              alt="Connections 2024 filming at Convent Gardens London"
              width={4800}
              height={2649}
            />
            <p>26th January 2024</p>
            <h3>Connections 2024</h3>
          </Link>
        </div>
      </section>

      <section className={styles.year}>
        <h2>
          <span className={styles.left} />
          2023
          <span className={styles.right} />
        </h2>
        <div className={styles.content}>
          <Link className={styles.item} href="/events/mental-wealth-festival-2023">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743979621/Photo2_srhget.jpg"
              alt=""
              width={1536}
              height={2048}
            />
            <p>12th October 2023</p>
            <h3>Mental Wealth Festival 2023</h3>
          </Link>

          <Link className={styles.item} href="/events/messages-of-hope-2023">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743893755/Messages_of_Hope_2023_1_rpedc7_qsozmo.jpg"
              alt="Painted pebbles from Messages of Hope 2023 pop-up art event"
              width={5376}
              height={3584}
            />
            <p>29th July 2023</p>
            <h3>Messages of Hope 2023</h3>
          </Link>

          <Link className={styles.item} href="/events/thrive-ldn-partnership-2023">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743980773/Screenshot_From_2025-04-07_00-05-33_plh6gm.png"
              alt=""
              width={1942}
              height={1920}
            />
            <p>15th May 2023</p>
            <h3>Thrive LDN Partnership</h3>
          </Link>
        </div>
      </section>

      <section className={styles.year}>
        <h2>
          <span className={styles.left} />
          2022
          <span className={styles.right} />
        </h2>
        <div className={styles.content}>
          <Link
            className={styles.item}
            href="/events/world-mental-health-day-2022"
          >
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743978852/world-mental-health-day-2022__2_nkwwdc.jpg"
              alt=""
              width={864}
              height={864}
            />
            <p>10th October 2022</p>
            <h3>World Mental Health Day 2022</h3>
          </Link>
        </div>
      </section>

      <section className={styles.year}>
        <h2>
          <span className={styles.left} />
          2020
          <span className={styles.right} />
        </h2>
        <div className={styles.content}>
          <Link className={styles.item} href="/events/messages-of-hope-2020">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743801009/Messages_of_Hope_2020_1_w82msv_hkkvzh.jpg"
              alt="Connections 2024 filming at Convent Gardens London"
              width={864}
              height={864}
            />
            <p>21st May 2020</p>
            <h3>Messages of Hope 2020</h3>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Events;
