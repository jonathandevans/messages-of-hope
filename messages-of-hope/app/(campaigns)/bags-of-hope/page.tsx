import ContactForm from "@/components/contact-form/contact-form";
import styles from "./page.module.css";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import {
  ArrowRight,
  Hospital,
  Instagram,
  Shirt,
  ShoppingBag,
} from "lucide-react";
import DonatePanel from "@/components/donate-panel/donate-panel";
import Banner from "@/components/banner/banner";
import Button from "@/components/ui/button/button";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Bags of Hope",
  description:
    "Bags of Hope is a project set up to provide patients arriving on psychiatric wards with a bag of both essential and self-care items. These bags contain items such as body wash, wipes, socks, underwear, colouring books, phone chargers, and activity books, all of which offer comfort and dignity to patients during a challenging time. The bags are delivered to local psychiatric wards across South Wales and England.",
});

const BagsOfHope = () => {
  return (
    <>
      <Banner
        title="Bags of Hope"
        description="Because no patient should feel alone"
        backgroundCss={styles.banner}
      />

      <section className={styles.what}>
        <div className={styles.text}>
          <h2>What is Bags of Hope?</h2>
          <p>
            Bags of Hope is a project set up to provide patients arriving on
            psychiatric wards with a bag of both essential and self-care items.
            These bags contain items such as body wash, wipes, socks, underwear,
            colouring books, phone chargers, and activity books, all of which
            offer comfort and dignity to patients during a challenging time. The
            bags are delivered to local psychiatric wards across South Wales and
            England.
          </p>
          <p>
            Through Bags of Hope we are able to support vulnerable individuals
            and ensure that upon arrival to psychiatric wards people are met
            with dignity and respect. We believe in the importance of providing
            individuals, who may not otherwise have anything, with essential
            items, thus creating more equality within the healthcare system. At
            all stages of the Bags of Hope process people are benefiting.
          </p>
          <p>
            Our community-driven approach includes bag-packing events where
            individuals can come together to contribute items and help assemble
            the bags. We&apos;re excited to expand these events to involve the
            general public, inviting people to support our mission and
            participate in creating bags.
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743939469/67F81FB8-7F64-49E3-80F6-562D33844FC4_zt3lky.jpg"
          alt="Bags of Hope bag packing event at City Lit"
          width={3024}
          height={4032}
        />
      </section>

      <section className={styles.feedback}>
        <h2>Have you received a Bag of Hope?</h2>
        <p>
          We gather feedback through surveys, social media messages, and
          in-person conversations during drop-offs to ensure we include items
          that meet the needs of the patients. Through feedback received, we
          went on to make &apos;gender neutral&apos; and &apos;vegan&apos; Bags
          of Hope to ensure that our project was inclusive.
        </p>
        <p>
          If you are a former/current patient or an employee on a psychiatric
          ward, please complete the following survey to provide us further
          feedback for this campaign.
        </p>
        <Button
          colour="outline"
          href="https://docs.google.com/forms/d/e/1FAIpQLScjZ4hWxSTVDi12UKYABqWDcNn_BTpPtUnOuQYYEE4gH-t3xw/viewform?usp=dialog"
          target="_blank"
        >
          Bags of Hope Survey <ArrowRight size={16} strokeWidth={3} />
        </Button>
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
              We&apos;ve received over 5000 items donated from the members of
              the public and businesses to go into Bags of Hope.
            </p>
          </article>

          <article>
            <ShoppingBag size={64} className={styles.icon} />
            <h3>
              250+ Bags <br />
              Created
            </h3>
            <p>
              In 2024 alone, we have been able to create over 250 male, female
              and gender neutral Bags of Hope.
            </p>
          </article>

          <article>
            <Hospital size={64} className={styles.icon} />
            <h3>
              16 Wards <br />
              Helped
            </h3>
            <p>
              We&apos;ve been able to deliver bags to patients over 16 wards
              throughout England and South Wales.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.setup}>
        <h2>What goes into a Bag of Hope?</h2>
        <p>
          Due to the quality of the Bags of Hope, it costs us around £20 to £25
          to fill a bag. We currently make two types of bags which we&apos;ve
          dubbed The Life Saver, containing only essential items, and The
          Premium Bundle, which also contains two bonus items. There are three
          variations on both of these bags with male, female and gender neutral
          options. As the bags include snacks we also mark them as vegan
          friendly when appropriate.<sup>1</sup>
        </p>
        <div className={styles.content}>
          <article className={styles.option}>
            <h3>
              <span>
                The Life Saver<sup>2</sup>
              </span>{" "}
              <span className={styles.highlight}>£20</span>
            </h3>
            <ul className={styles.list}>
              <li>2 in 1 or shampoo & conditioner</li>
              <li>Body wash & flannel</li>
              <li>Toothbrush & paste</li>
              <li>Roll-on deodorant</li>
              <li>Pants & socks</li>
              <li>Activity book & notebook</li>
              <li>Coloured pens or pencils</li>
              <li>Sanitary products</li>
              <li>Fidget toys</li>
              <li>Moisturiser or hand cream</li>
              <li>Playing cards or game</li>
              <li>Tissues</li>
              <li>Ear buds</li>
              <li>2 food items</li>
              <li>Hair bobbles</li>
              <li>Face wipes or baby wipes</li>
            </ul>
          </article>
          <article className={`${styles.option} ${styles.yellow}`}>
            <h3>
              <span>
                The Premium Bundle<sup>3</sup>
              </span>{" "}
              <span className={styles.highlight}>£25</span>
            </h3>
            <ul className={styles.list}>
              <li>2 in 1 or shampoo & conditioner</li>
              <li>Body wash & flannel</li>
              <li>Toothbrush & paste</li>
              <li>Roll-on deodorant</li>
              <li>Pants & socks</li>
              <li>Activity book & notebook</li>
              <li>Coloured pens or pencils</li>
              <li>Sanitary products</li>
              <li>Fidget toys</li>
              <li>Moisturiser or hand cream</li>
              <li>Playing cards or game</li>
              <li>Tissues</li>
              <li>Ear buds</li>
              <li>2 food items</li>
              <li>Hair bobbles</li>
              <li>Face wipes or baby wipes</li>
            </ul>
            <h4>Additional Items</h4>
            <ul className={styles.list}>
              <li>Sliders or slippers</li>
              <li>Soft toy</li>
              <li>Headphones</li>
              <li>Water bottle</li>
              <li>Charger or portable charger</li>
              <li>Chapstick or vaseline</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.journey}>
        <div className={styles.text}>
          <h2>The Journey So Far...</h2>
          <p>
            This campaign first started in the Christmas of 2023 when Bethan
            created a social media post that went viral showing the initial
            concept of Bags of Hope. This resulted in over 250 amazon packages
            showing up on our doorstep containing thousands of donated items.
            Honestly, the delivery drivers were sick of us. This lead us to
            fully implement this idea into a campaign over the next year,
            starting to organise bag packing events, and setup more frequent bag
            drop offs.
          </p>
          <p>
            In 2024 we received over 5000 donations and donated over 250 bags to
            psychiatric wards. With funding we plan to be able to double the
            amount of Bags of Hope we donate in a year. One patient commented,
            &apos;Receiving a Bag of Hope when I was admitted to hospital gave
            me hope and reminded me that I wasn&apos;t alone.&apos;
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772017/Bags_of_Hope_1_kxut4v_knbzf5.jpg"
          alt="Bethan Evans standing behind a collection of Bags of Hope ready to be delivered"
          width={1356}
          height={1433}
        />
      </section>

      <ContactForm
        title="Join Us On Our Journey"
        colour="blue"
        description="Messages of Hope relies on donations from both the public and businesses to stock the bags, if you have any feedback, suggestions, or would like to help, please get in touch. We're always looking to organise more bag packing events and would love to hear from you."
      />

      <section className={styles.help}>
        <div className={styles.text}>
          <h2>How Can I Help?</h2>
          <p>
            There are several impactful ways you can support Bags of Hope in its
            mission to provide essential items for patients arriving on
            psychiatric wards. You can donate items directly using our Amazon
            Wishlist, ensuring that much-needed supplies reach those in need.
            Financial contributions are also greatly appreciated and can be made
            through our Get Involved page; even a small donation of £5 can make
            a significant difference.
          </p>
          <p>
            If you&apos;re unable to donate, simply sharing our Instagram
            stories helps immensely in raising awareness and garnering broader
            support for our cause. Every act of kindness, big or small,
            contributes to making a meaningful impact on the lives of those
            struggling with their mental health.
          </p>
          <p>
            We appreciate all donations, but here are some suggestions for items
            that are always in need. Please ensure all items are new and
            unopened. Any items we receive that cannot be put into a bag, will
            be donated to a food bank or other appropriate charity. If
            you&apos;re not sure, just drop us a message. Thank you for your
            support!
          </p>
          <div className={styles.links}>
            <Button
              href="https://www.instagram.com/messagesof.hope/"
              target="_blank"
            >
              <Instagram size={16} strokeWidth={2} /> Instagram
            </Button>
            <Button colour="yellow" href="/get-involved">
              Support Us <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </div>
          <h3>
            A special thanks to the following people and organisations for your
            donations and support this year:
          </h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/theurdang/" target="_blank">
                @theurdang
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/reactsupportservices/"
                target="_blank"
              >
                @reactsupportservices
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nbadanceacademy/"
                target="_blank"
              >
                @nbadanceacademy
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kittyriggs_/" target="_blank">
                @kittyriggs_
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cityuniversitylondon/"
                target="_blank"
              >
                @cityuniversitylondon
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thollisterart/"
                target="_blank"
              >
                @thollisterart
              </a>
            </li>
          </ul>
          <h3>Thank you for all your support.</h3>
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

      <section className={styles.disclaimer}>
        <p>
          <sup>1</sup> Essential items include: 2 in 1 or shampoo & conditioner,
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
          Amazon Wishlist. The ability to mark bags as vegan friendly is done on
          a best effort basis, and cannot be guaranteed to be correct. It is the
          responsibility of those using the product to confirm the contents.
          <br />
          <sup>2</sup> This list is a example of what we intend to put into the
          Life Saver bag, not a checklist we have to adhere to when making the
          bag. Based on current supply items may be missing or substituted,
          however we will make a best effort basis to provide consistent quality
          between the bags.
          <br />
          <sup>3</sup> This list is a example of what we intend to put into the
          Premium Bundle bag, not a checklist we have to adhere to when making
          the bag. Based on current supply items may be missing or substituted,
          however we will make a best effort basis to provide consistent quality
          between the bags.
        </p>
      </section>
    </>
  );
};
export default BagsOfHope;
