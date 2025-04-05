import MessagePanel from "@/components/messages-panel/messages-panel";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/contact-form/contact-form";

const LineOfHope = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Line of Hope</h1>
          <p>When you need a lifeline</p>
        </div>

        <span className={styles.art1} />
        <span className={styles.art2} />
        <span className={styles.art3} />
        <span className={styles.art4} />
        <span className={styles.art5} />

        <span className={styles.art6} />
        <span className={styles.art7} />
        <span className={styles.art8} />
        <span className={styles.art9} />
        <span className={styles.art10} />
      </section>

      <section className={styles.what}>
        <div className={styles.text}>
          <h2>What is Line of Hope?</h2>
          <p>
            Messages of Hope is a Community Interest Company encouraging people
            to write hopeful messages for those struggling with mental health.
            These messages become stickers and Instagram posts spread across the
            UK, aiming to improve mental health and support psychiatric
            patients.
          </p>
          <p>
            Messages of Hope is a Community Interest Company encouraging people
            to write hopeful messages for those struggling with mental health.
            These messages become stickers and Instagram posts spread across the
            UK, aiming to improve mental health and support psychiatric
            patients.
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772017/Bags_of_Hope_1_kxut4v_knbzf5.jpg"
          alt="Bethan Evans standing behind a collection of Bags of Hope ready to be delivered"
          width={1356}
          height={1433}
        />
      </section>

      <ContactForm title="Want To Create Your Own Line?" />

      <MessagePanel />
    </>
  );
};
export default LineOfHope;
