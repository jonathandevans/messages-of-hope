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
    "Messages of Hope is run by a small team of directors, all passionate about the work we do, but we cannot do it alone. Here we are asking for your support. A donation from you will help us continue to reach those who are struggling to cope. We are always looking for people to support our work beyond the donation, so please reach out to us if you can help.",
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
              Messages of Hope is run by a small team of directors, all
              passionate about the work we do, but we cannot do it alone. Here
              we are asking for your support. Whether you can provide a donation
              directly, send us items for Bags of Hope, or even just share our
              work and story on Instagram your support is what we rely on. With
              your help, we can be there for everyone who needs us.
            </p>
            <p>
              Messages of Hope is committed to improving individuals&apos;
              mental well-being. A donation from you will help us continue to
              reach those who are struggling to cope. We are always looking for
              people to support our work beyond the donation, especially as we
              are looking to run more events than ever before, so please reach
              out to us if you can help. You can email us, or message us on
              Instagram.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.incredible}>
        <h2>You&apos;re about to do something really incredible</h2>
        <p>
          With your money we are able to continue to support psychiatric
          patients as well as those struggling with their mental health
          throughout England and Wales. Your money will enable us to continue
          providing Bags of Hope for psychiatric patients, go out into
          communities to create collaborative art projects, and financially
          support the ongoing work within the organisation. With your support,
          Messages of Hope plans to run indefinitely and expand yearly, to
          provide communities with increasingly more mental health support.
        </p>
        <p>
          If you like what we do and who we are and want to help, there are many
          ways you could help us out.
        </p>
        <Button
          href="https://buy.stripe.com/fZe5kzdp88s3efS001"
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
              When you donate, you&apos;ll be taken to a secure webpage where
              you can contribute a one-off or regular donation. Messages of Hope
              heavily relies on the gratuitous donations we receive from
              individuals like yourself. Any amount you are able to give in
              support of Messages of Hope is hugely appreciated.
            </p>
            <p>
              If you&apos;re unable to donate, simply sharing our Instagram
              stories helps immensely in raising awareness and garnering broader
              support for our cause. Every act of kindness, big or small,
              contributes to making a meaningful impact on the lives of those
              struggling with their mental health.
            </p>
          </div>
          <div className={styles.links}>
            <Link
              href="https://buy.stripe.com/fZe5kzdp88s3efS001"
              target="_blank"
            >
              <Image
                src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743865511/Writing_a_Message_2_-_Connections_2024_1_l5cy7x_ih3mor.jpg"
                alt="A member of the public writing a message of hope"
                width={4000}
                height={6000}
              />
              <h3>Make a single donation</h3>
            </Link>
            <Link
              href="https://donate.stripe.com/14k28n2Ku9w7dbO5km"
              target="_blank"
            >
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
          In the UK, an estimated five children in every classroom have a mental
          health problem and 80% of young people with mental health needs said
          the pandemic made their mental health worse. Around 1 in 4 adults in
          the UK experience a mental health problem each year, with 1 in 6
          people report experiencing a common mental health problem (like
          anxiety and depression) in any given week in England. But it
          doesn&apos;t have to be this way, things can get better.
        </p>
        <p>
          Donate today so we can continue to offer support to those who need it,
          when they need it.
        </p>
        <Button
          href="https://buy.stripe.com/fZe5kzdp88s3efS001"
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
          We understand if you do not feel comfortable, or are unable to provide
          us with a cash donation. If you still want to support our work, we
          have setup and Amazon Wishlist so that we can fill the bags used in
          the Bags of Hope campaign. Alternatively you can buy our
          self-published colouring book, with the profits going to our continued
          work in the community.
        </p>
        <div className={styles.content}>
          <Dropdown title="Amazon Wishlist">
            <p>
              If you don&apos;t feel comfortable with a donation of money, we
              have setup and Amazon wishlist so that we can fill the bags used
              in the Bags of Hope campaign.
            </p>
            <p>
              Items that we are looking for include body wash, wipes, socks, and
              underwear. These items are essential for patients arriving on
              psychiatric wards and offer comfort and dignity to patients during
              a challenging time. We also list snacks and activities that can be
              included in the bags.
            </p>
            <Button
              href="https://www.amazon.co.uk/hz/wishlist/ls/2B8A3SKRC0F49?ref_=wl_share"
              target="_blank"
            >
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
            <Button
              href="https://www.amazon.co.uk/Messages-Hope-Bethan-Hannah-Evans/dp/B0D3XLX1K2/ref=sr_1_1?crid=32KF2KZ9FLD32&dib=eyJ2IjoiMSJ9.PhczWzNPLNkjDM2Abu_Bgg.IAGmlyeVbbYQwqPXz2z5Nw4AkB7opJZjPQBVM9OGxkc&dib_tag=se&keywords=messages+of+hope+colouring+book+bethan+evans&qid=1717027563&sprefix=messages+of+hope+colouring+book+bethan+evans%2Caps%2C77&sr=8-1"
              target="_blank"
            >
              Colouring Book
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </Dropdown>
        </div>
      </section>

      <ContactForm title="Get In Touch" />

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
          basis. Additionally, only bags labelled &quot;female&quot; and
          &quot;gender neutral&quot; contain sanitary products. The price of our
          Bags of Hope is based upon our ability to bulk buy producs with any
          monetary donations we receive and does not reflect the price of a Bag
          of Hope that is filled with items from our Amazon Wishlist. Whilst
          donation examples are given in terms of their contribution to Bags of
          Hope, Messages of Hope retain the right to use donations in any way
          appropriate.
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
          &quot;female&quot; and &quot;gender neutral&quot; contain sanitary
          products. The price of our Bags of Hope is based upon our ability to
          bulk buy producs with any monetary donations we receive and does not
          reflect the price of a Bag of Hope that is filled with items from our
          Amazon Wishlist. Whilst donation examples are given in terms of their
          contribution to Bags of Hope, Messages of Hope retain the right to use
          donations in any way appropriate.
          <br />
          <sup>3</sup> This costing analysis is based on the production of 10
          &apos;Life Saver&apos; Bags of Hope, as described in <sup>1</sup>, with items
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
