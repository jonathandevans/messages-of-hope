import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Events = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Events</h1>
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

      <section className={styles.year}>
        <h2>
          <span className={styles.left} />
          2024
          <span className={styles.right} />
        </h2>
        <div className={styles.content}>
          <Link className={styles.item} href="/events/react-bag-packing">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743592893/IMG_1599_wpo5wq.jpg"
              alt="Bethan and Emmanuella standing behind a collection of Bags of Hope ready to be delivered"
              width={3024}
              height={4032}
            />
            <p>20 December 2024</p>
            <h3>React Bag Packing</h3>
          </Link>

          <Link className={styles.item} href="/events/feeling-blue">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743890174/EB3939A3-BAEA-4436-850A-39BA150A3750_sy9u6g.jpg"
              alt="Line of Hope at City Lit"
              width={3024}
              height={4032}
            />
            <p>11 October 2024</p>
            <h3>Feeling Blue at City Lit</h3>
          </Link>

          <Link className={styles.item} href="/events/connections-2024">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743549732/eT3lf4bF2M_tl9glu_1_hmnuzy_rgpkdl.jpg"
              alt="Connections 2024 filming at Convent Gardens London"
              width={4800}
              height={2649}
            />
            <p>26 January 2024</p>
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
          <Link className={styles.item} href="/events/messages-of-hope-2023">
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743893755/Messages_of_Hope_2023_1_rpedc7_qsozmo.jpg"
              alt="Painted pebbles from Messages of Hope 2023 pop-up art event"
              width={5376}
              height={3584}
            />
            <p>29 July 2023</p>
            <h3>Messages of Hope 2023</h3>
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
            <p>21 May 2020</p>
            <h3>Messages of Hope 2020</h3>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Events;
