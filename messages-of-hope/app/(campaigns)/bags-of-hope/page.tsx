import ContactForm from "@/components/contact-form/contact-form";
import styles from "./page.module.css";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import { Hospital, Shirt, ShoppingBag } from "lucide-react";
import DonatePanel from "@/components/donate-panel/donate-panel";

const BagsOfHope = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <h1>Bags of Hope</h1>
          <p>Because no patient should feel alone</p>
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
          <h2>What is Bags of Hope?</h2>
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

      <section className={styles.stats}>
        <div className={styles.inner}>
          <article>
            <Shirt size={64} className={styles.icon} />
            <h3>
              5000+ Items <br />
              Donated
            </h3>
            <p>
              Over the past year we have been able to create over 250 male,
              female and gender neutral bags of hope.
            </p>
          </article>

          <article>
            <ShoppingBag size={64} className={styles.icon} />
            <h3>
              250+ Bags <br />
              Created
            </h3>
            <p>
              Over the past year we have been able to create over 250 male,
              female and gender neutral bags of hope.
            </p>
          </article>

          <article>
            <Hospital size={64} className={styles.icon} />
            <h3>
              16 Wards <br />
              Helped
            </h3>
            <p>
              Over the past year we have been able to create over 250 male,
              female and gender neutral bags of hope.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.journey}>
        <div className={styles.text}>
          <h2>The Journey So Far...</h2>
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

      <ContactForm title="Join Us On Our Journey" colour="blue" />

      <section className={styles.help}>
        <div className={styles.text}>
          <h2>How Can I Help?</h2>
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
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743888291/Group_4_1_gjs82p.png"
          alt="A colection of photos showing the bags of hope being delivered to wards"
          width={1380}
          height={1721}
        />
      </section>

      <DonatePanel colour="darkBlue" />

      <MessagePanel />
    </>
  );
};
export default BagsOfHope;
