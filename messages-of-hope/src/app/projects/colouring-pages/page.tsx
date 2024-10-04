import { Metadata } from "next";
import { Button } from "@/components/button/button";
import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { ImageGrid } from "./image-grid";
import { generateMetadata } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Colouring Pages",
  description:
    "Messages of Hope provides free colouring pages to help spread hope and positivity. Download and print our colouring pages to share your creativity with us.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="Colouring Pages"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg"
        short={true}
      />

      <MaxWidthWrapper className={styles.panel}>
        <p>
          Messages of Hope is proud to announce the release of our very own
          colouring book. This colouring book is a beautiful compilation of some
          of the message of hope submissions we have received via our website
          and social media pages. Since the origin of Messages of Hope we have
          received over 1500 messages of hope from strangers who are looking to
          give hope and provide support to other struggling individuals.
        </p>
        <p>
          We understand that we are living in very challenges times, therefore,
          if you are unable to purchase the Messages of Hope colouring book,
          feel free to download and print out our free colouring pages. Please
          share with us your completed colouring pages on social media.
        </p>
        <Button
          className={styles.button}
          href="https://www.amazon.co.uk/Messages-Hope-Bethan-Hannah-Evans/dp/B0D3XLX1K2/ref=sr_1_1?crid=32KF2KZ9FLD32&dib=eyJ2IjoiMSJ9.PhczWzNPLNkjDM2Abu_Bgg.IAGmlyeVbbYQwqPXz2z5Nw4AkB7opJZjPQBVM9OGxkc&dib_tag=se&keywords=messages+of+hope+colouring+book+bethan+evans&qid=1717027563&sprefix=messages+of+hope+colouring+book+bethan+evans%2Caps%2C77&sr=8-1"
          variant={{ colour: "blue" }}
          target="_blank"
        >
          Colouring Book
        </Button>
      </MaxWidthWrapper>

      <ImageGrid />
    </>
  );
};
export default Page;
