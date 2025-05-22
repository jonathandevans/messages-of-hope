import Banner from "@/components/frontend/banner/banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/frontend/messages-panel/messages-panel";
import Image from "next/image";
import Button from "@/components/frontend/button/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "React Bag Packing",
  description:
    "On the 20th December, Messages of Hope collaborated with React Support Services in a Bags of Hope bag packing event. React had their team and members collect many items leading up to the event, which we then combined with additional stock in order to produce over 30 Bags of Hope. Our work with React gave us some new suggestions for items that should be placed into future bags, and both the staff and people their were very supportive up to and on the day of the event.",
});

const ReactBagPacking = () => {
  return (
    <>
      <Banner
        title="React Bag Packing"
        description="20th December 2024"
        backgroundCss={styles.banner}
      />

      <section className={styles.panel}>
        <div className={styles.text}>
          <p>
            On the 20th December, Messages of Hope collaborated with React
            Support Services in a Bags of Hope bag packing event. React had
            their team and members collect many items leading up to the event,
            which we then combined with additional stock in order to produce
            over 30 Bags of Hope. Our work with React gave us some new
            suggestions for items that should be placed into future bags, and
            both the staff and people their were very supportive up to and on
            the day of the event.
          </p>
          <p>
            The work React does with providing specialist care for adults who
            are over the age of 18 with a mental health condition, is truly
            impressive.They provide a range of bespoke residential and supported
            living services that enable the Individuals we support to lead
            fulfilled lives and achieve positive outcomes.
          </p>
          <p>
            We want to give our thanks to React, and especially Emily Osborne
            and Emmanuella Nicolaou for the support they gave us. Please check
            out the amazing work React Support Services to provide mental health
            support.
          </p>
          <Button
            href="https://www.reactsupportservices.co.uk/"
            colour="outline"
            className={styles.button}
            target="_blank"
          >
            React Support Services <ArrowRight strokeWidth={3} size={16} />
          </Button>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743879330/IMG_1592_vz5ka0.jpg"
          alt=""
          width={1536}
          height={2048}
        />
      </section>

      <MessagePanel />
    </>
  );
};
export default ReactBagPacking;
