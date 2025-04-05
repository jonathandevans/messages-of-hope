import MessagePanel from "@/components/messages-panel/messages-panel";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/contact-form/contact-form";
import Button from "@/components/ui/button/button";
import { ArrowRight, Hospital, Package, PackagePlus } from "lucide-react";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import Link from "next/link";
import Dropdown from "@/components/ui/dropdown/dropdown";

export const metadata: Metadata = generateMetadata({
  title: "Get Involved",
  description:
    "Messages of Hope is a Community Interest Company that relies on donations to continue our work. Find out how you can support us and help us spread hope.",
});

const GetInvolved = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.inner}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743861916/Filming_-_Connections_2024_1_muvkce_gkelxl.jpg"
            alt="Behind the scenes of the Connections 2024 video project"
            width={6000}
            height={4000}
          />

          <div className={styles.content}>
            <h1>Get Involved</h1>
            <p>
              Messages of Hope is a Community Interest Company encouraging
              people to write hopeful messages for those struggling with mental
              health. We organise a range of projects each year, each designed
              to connect communities through creativity and collective empathy.
              Our initiatives include collaborative art pieces, video projects
              for mental health awareness days, and public displays of messages
              of hope.
            </p>
            <p>
              Messages of Hope is a Community Interest Company encouraging
              people to write hopeful messages for those struggling with mental
              health. We organise a range of projects each year, each designed
              to connect communities through creativity and collective empathy.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.incredible}>
        <h2>You're about to do something really incredible</h2>
        <p>
          Messages of Hope is a Community Interest Company encouraging people to
          write hopeful messages for those struggling with mental health. We
          organise a range of projects each year, each designed to connect
          communities through creativity and collective empathy. Messages of
          Hope is a Community Interest Company encouraging people to write
          hopeful messages for those struggling with mental health. We organise
          a range of projects each year, each designed to connect communities
          through creativity and collective empathy.
        </p>
        <p>
          Our initiatives include collaborative art pieces, video projects for
          mental health awareness days, and public displays of messages of hope.
        </p>
        <Button
          href="https://donate.stripe.com/fZedR5bh0fUv2xa144"
          target="_blank"
          colour="yellow"
          className={styles.button}
        >
          Donate Now
          <ArrowRight size={16} strokeWidth={3} />
        </Button>
      </section>

      <section className={styles.donationOptions}>
        <article className={styles.option}>
          <span className={styles.icon}>
            <Package />
          </span>

          <h3>£20</h3>
          <h4>The Life Saver</h4>
          <p>
            Donate £20 and provide one psychiatric patient with all the
            essentials they need whilst in hospital.<sup>1</sup>
          </p>
        </article>

        <article className={styles.option}>
          <span className={styles.icon}>
            <PackagePlus />
          </span>

          <h3>£25</h3>
          <h4>The Premium Bundle</h4>
          <p>
            Donate £25 and provide one psychiatric patient with all the
            essentials they need in hospital, plus 2 luxury items.<sup>2</sup>
          </p>
        </article>

        <article className={styles.option}>
          <span className={styles.icon}>
            <Hospital />
          </span>

          <h3>£225</h3>
          <h4>The Ward</h4>
          <p>
            Donate £225 and provide 10 psychiatric patients with all the
            essentials they need whilst in hospital. By selecting this option it
            enables us to buy missing items in bulk, for more patients.
            <sup>3</sup>
          </p>
        </article>
      </section>

      <section className={styles.howTo}>
        <h2>How to donate</h2>
        <div className={styles.inner}>
          <div className={styles.text}>
            <p>
              Messages of Hope is a Community Interest Company encouraging
              people to write hopeful messages for those struggling with mental
              health. We organise a range of projects each year, each designed
              to connect communities through creativity and collective empathy.
            </p>
            <p>
              Messages of Hope is a Community Interest Company encouraging
              people to write hopeful messages for those struggling with mental
              health.
            </p>
          </div>
          <div className={styles.links}>
            <Link href="">
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743865511/Writing_a_Message_2_-_Connections_2024_1_l5cy7x_ih3mor.jpg"
                alt="A member of the public writing a message of hope"
                width={4000}
                height={6000}
              />
              <h3>Make a single donation</h3>
            </Link>
            <Link href="">
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743865730/90m1s9J70V_jauwnv_1_owhrtt_r0km6p.jpg"
                alt="A member of the public writing a message of hope"
                width={6000}
                height={4000}
              />
              <h3>Make a monthly donation</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.incredible}>
        <h2>Your support has never been more important</h2>
        <p>
          Messages of Hope is a Community Interest Company encouraging people to
          write hopeful messages for those struggling with mental health. We
          organise a range of projects each year, each designed to connect
          communities through creativity and collective empathy. Messages of
          Hope is a Community Interest Company encouraging people to write
          hopeful messages for those struggling with mental health.
        </p>
        <p>
          Our initiatives include collaborative art pieces, video projects for
          mental health awareness days, and public displays of messages of hope.
        </p>
        <Button
          href="https://donate.stripe.com/fZedR5bh0fUv2xa144"
          target="_blank"
          colour="yellow"
          className={styles.button}
        >
          Donate Now
          <ArrowRight size={16} strokeWidth={3} />
        </Button>
      </section>

      <section className={styles.other}>
        <h3>Other ways to help</h3>
        <p>
          Messages of Hope is a Community Interest Company encouraging people to
          write hopeful messages for those struggling with mental health. We
          organise a range of projects each year, each designed to connect
          communities through creativity and collective empathy. Messages of
          Hope is a Community Interest Company encouraging people to write
          hopeful messages for those struggling with mental health.
        </p>
        <div className={styles.content}>
          <Dropdown title="Amazon Wishlist">
            <p>
              If you don't feel comfortable with a donation of money, we have
              setup and Amazon wishlist so that we can fill the bags used in the
              Bags of Hope campaign.
            </p>
            <p>
              Items that we are looking for include body wash, wipes, socks, and
              underwear. These items are essential for patients arriving on
              psychiatric wards and offer comfort and dignity to patients during
              a challenging time. We also list snacks and activities that can be
              included in the bags.
            </p>
            <Button href="">
              Amazon Wishlist
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </Dropdown>

          <Dropdown title="Colouring Book">
            <p>
              Messages of Hope is proud to announce the release of our very own
              colouring book. This colouring book is a beautiful compilation of
              some of the message of hope submissions we have received via our
              website and social media pages. Since the origin of Messages of
              Hope we have received over 1500 messages of hope from strangers
              who are looking to give hope and provide support to other
              struggling individuals.
            </p>
            <p>
              We decided that designing and illustrating a Messages of Hope
              colouring book would be the best way to share a wide variety of
              some of our favourite message submissions. If you are looking for
              a fun, relaxing, positive and creative outlet, our colouring book
              is for you! Please share with us your completed colouring pages on
              social media.
            </p>
            <p>
              You can now purchase our Message of Hope colouring book via
              Amazon.
            </p>
            <Button href="">
              Colouring Book
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </Dropdown>
        </div>
      </section>

      <ContactForm />

      <MessagePanel />

      <div className={styles.disclaimer}>
        <p>
          <sup>1</sup> Essential items include: 2 in 1 or shampoo & conditioner,
          body wash & flannel, toothbrush & paste, roll-on deodorant, pants &
          socks, activity book or notebook, pens or pencils, sanitary products,
          fidget toys, moisturiser or handcream, playing cards or game, tissues,
          ear buds, 2 food items, hair bobbles, face wipes or baby wipes. We
          endeavour to put all of the listed items into one Bag of Hope but due
          to our reliance on donations, some bags may contain slightly fewer
          items and our attempts to meet the checklist are on a best effort
          basis. Additionally, only bags labelled "female" and "gender neutral"
          contain sanitary products. The price of our Bags of Hope is based upon
          our ability to bulk buy producs with any monetary donations we receive
          and does not reflect the price of a Bag of Hope that is filled with
          items from our Amazon Wishlist. Whilst donation examples are given in
          terms of their contribution to Bags of Hope, Messages of Hope retain
          the right to use donations in any way appropriate.
          <br />
          <sup>2</sup> Essential items include: 2 in 1 or shampoo & conditioner,
          body wash & flannel, toothbrush & paste, roll-on deodorant, pants &
          socks, activity book or notebook, pens or pencils, sanitary products,
          fidget toys, moisturiser or handcream, playing cards or game, tissues,
          ear buds, 2 food items, hair bobbles, face wipes or baby wipes.
          Possible bonus items include: sliders or slippers, soft toy,
          headphones, water bottle, charger or portable charger, chapstick or
          vaseline. We endeavour to put all of the essential items and 2 bonus
          items into one Bag of Hope but due to our reliance on donations, some
          bags may contain slightly fewer items and our attempts to meet the
          checklist are on a best effort basis. Additionally, only bags labelled
          "female" and "gender neutral" contain sanitary products. The price of
          our Bags of Hope is based upon our ability to bulk buy producs with
          any monetary donations we receive and does not reflect the price of a
          Bag of Hope that is filled with items from our Amazon Wishlist. Whilst
          donation examples are given in terms of their contribution to Bags of
          Hope, Messages of Hope retain the right to use donations in any way
          appropriate.
          <br />
          <sup>3</sup> This costing analysis is based on the production of 10
          'Life Saver' Bags of Hope, as described in <sup>1</sup>, with items
          bought in bulk and use of existing stockpile. Whilst donation examples
          are given in terms of their contribution to Bags of Hope, Messages of
          Hope retain the right to use donations in any way appropriate.
          <br />
          If you have any concerns over the donations provided to Messages of
          Hope, please feel free to email jonathan@messagesofhope.co.uk and we
          will answer any appropriate questions.
        </p>
      </div>
    </>
  );
};
export default GetInvolved;
