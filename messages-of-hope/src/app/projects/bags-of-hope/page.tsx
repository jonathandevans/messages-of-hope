import { Metadata } from "next";
import { Button } from "@/components/button/button";
import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { TextPanel } from "@/components/panel/text-panel/text-panel";
import {
  faBagShopping,
  faHospital,
  faSocks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateMetadata } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Bags of Hope",
  description:
    "Bags of Hope is a project to give items to patients arriving on psychiatric wards. Our goal is to ensure that nobody arrives to psychiatric wards with only the clothes on their back. Patients should be there for treatment and help, and hospital admissions shouldn't feel like a prison sentence.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="Bags of Hope"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694192/Smile_-_Connections_2024_1_1_puq98r.jpg"
        short={true}
      />

      <TextPanel
        imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700468/AA6lgpnyoV_qbqlvo_1_dhvmbh.jpg"
        imageAlt="Bethan delivering bags to psychiatric wards"
        title="What is Bags of Hope?"
        contentClassName={styles.textContent}
      >
        <p>
          Bags of Hope is a project to give items to patients arriving on
          psychiatric wards. Our goal is to ensure that nobody arrives to
          psychiatric wards with only the clothes on their back. Patients should
          be there for treatment and help, and hospital admissions shouldn't
          feel like a prison sentence.
        </p>
        <p>
          These Bags of Hope provide essential items such as body wash, wipes,
          socks, and underwear, offering comfort and dignity to patients during
          a challenging time. Donated items are sorted into different bags, each
          providing a range of essentials as well as activites, snacks.
        </p>
        <p>
          The bags are delivered to local psychiatric wards in and around the
          Vale of Glamorgan.
        </p>
        <p>
          Go to our{" "}
          <a href="https://www.instagram.com/messagesof.hope/" target="_blank">
            Instagram page
          </a>{" "}
          to get the latest updates on the Bags of Hope project.
        </p>
      </TextPanel>

      <section className={styles.darkPanel}>
        <MaxWidthWrapper className={styles.stats}>
          <article>
            <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
            <h4>Bags Created:</h4>
            <p>159</p>
          </article>
          <article>
            <FontAwesomeIcon icon={faSocks} className={styles.icon} />
            <h4>Items Donated:</h4>
            <p>4500+</p>
          </article>
          <article>
            <FontAwesomeIcon icon={faHospital} className={styles.icon} />
            <h4>Wards Helped:</h4>
            <p>9</p>
          </article>
        </MaxWidthWrapper>
      </section>

      <TextPanel
        imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694833/Bags_of_Hope_1_kxut4v.jpg"
        imageAlt="Bethan standing behind bags that are ready to be delivered to wards"
        title="How Can I Help?"
        variant={{ textPosition: "right", colour: "blue" }}
        contentClassName={styles.textContent}
      >
        <p>
          There are several impactful ways you can support Bags of Hope in its
          mission to provide essential items for patients arriving on
          psychiatric wards. You can donate items directly using our Amazon
          wishlist, ensuring that much-needed supplies reach those in need.
          Financial contributions are also greatly appreciated and can be made
          through our JustGiving page or directly to us; even a small donation
          of £2 can make a significant difference.
        </p>
        <Button href="/support-us" variant={{ colour: "blue" }}>
          Support Us
        </Button>
        <p>
          If you're unable to donate, simply sharing our Instagram stories helps
          immensely in raising awareness and garnering broader support for our
          cause. Every act of kindness, big or small, contributes to making a
          meaningful impact on the lives of those struggling with their mental
          health.
        </p>
      </TextPanel>

      <section className={styles.donations} id="list">
        <MaxWidthWrapper>
          <h2>Dontation Suggestions</h2>
          <p>
            We appreciate all donations, but here are some suggestions for items
            that are always in need. Please ensure all items are new and
            unopened. Thank you for your support!
          </p>

          <div className={styles.recs}>
            <ul>
              <li><div /> <span>Shampoo, conditioner, body wash, hand soap</span></li>
              <li><div /> <span>Tooth brush and tooth paste</span></li>
              <li><div /> <span>Underwear, socks, sports bra</span></li>
              <li><div /> <span>Hair brush, bobbles, comb, silk bonnet</span></li>
              <li><div /> <span>Notebook, colouring book, puzzle book</span></li>
              <li><div /> <span>Fidget toys, playing cards, games</span></li>
              <li><div /> <span>Vaseline, moisturiser, flannel, hand cream</span></li>
              <li><div /> <span>Chocolate, crisps, biscuits</span></li>
              <li><div /> <span>Phone charger, charging port</span></li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>

      <MessageSlideshow />
    </>
  );
};
export default Page;
