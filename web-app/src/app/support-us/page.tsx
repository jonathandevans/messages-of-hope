import { Banner } from "@/components/panel/banner/banner";
import styles from "./page.module.css";
import { ContactForm } from "@/components/panel/contact-form/contact-form";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { Button } from "@/components/button/button";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata : Metadata = generateMetadata({ title: "Support Us", description: "Messages of Hope is a Community Interest Company that relies on donations to continue our work. Find out how you can support us and help us spread hope." }); 

const Page = () => {
  return (
    <>
      <Banner title="Support Us" image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg" short={true} />

      <MaxWidthWrapper className={styles.panel}>
        <div className={styles.item}>
          <h2>Colouring Book</h2>
          <p>Messages of Hope is proud to announce the release of our very own colouring book. This colouring book is a beautiful compilation of some of the message of hope submissions we have received via our website and social media pages. Since the origin of Messages of Hope we have received over 1500 messages of hope from strangers who are looking to give hope and provide support to other struggling individuals.</p>
          <p>We decided that designing and illustrating a Messages of Hope colouring book would be the best way to share a wide variety of some of our favourite message submissions. If you are looking for a fun, relaxing, positive and creative outlet, our colouring book is for you! Please share with us your completed colouring pages on social media.</p>
          <p>You can now purchase our Message of Hope colouring book via Amazon.</p>
          <Button href="https://www.amazon.co.uk/Messages-Hope-Bethan-Hannah-Evans/dp/B0D3XLX1K2/ref=sr_1_1?crid=32KF2KZ9FLD32&dib=eyJ2IjoiMSJ9.PhczWzNPLNkjDM2Abu_Bgg.IAGmlyeVbbYQwqPXz2z5Nw4AkB7opJZjPQBVM9OGxkc&dib_tag=se&keywords=messages+of+hope+colouring+book+bethan+evans&qid=1717027563&sprefix=messages+of+hope+colouring+book+bethan+evans%2Caps%2C77&sr=8-1" target="_blank" className={styles.button} variant={{ colour: "blue" }}>Colouring Book</Button>
        </div>
        <div className={styles.item}>
          <h2>Cash Donation</h2>
          <p>Messages of Hope heavily relies on the gratuitous donations we receive from individuals like yourself. Any amount you are able to give in support of Messages of Hope is hugely appreciated.</p>
          <p>With your money we are able to continue to support psychiatric patients as well as those struggling with their mental health throughout England and Wales. Your money will enable us to continue providing Bags of Hope for psychiatric patients, go out into communities to create collaborative art projects, and financially support the ongoing work within the organisation.</p>
          <p>If you like what we do and who we are and want to help, there are many ways you could help us out. By donating to Messages of Hope you would be helping us to continue our work in spreading mental health awareness and giving hope to those who need it.</p>
          <Button href="https://donate.stripe.com/fZedR5bh0fUv2xa144" target="_blank" className={styles.button} variant={{ colour: "yellow" }}>Donate Directly</Button>
        </div>
        <div className={styles.item}>
          <h2>Amazon Wishlist</h2>
          <p>If you don't feel comfortable with a donation of money, we have setup and Amazon wishlist so that we can fill the bags used in the Bags of Hope campaign.</p>
          <p>Items that we are looking for include body wash, wipes, socks, and underwear. These items are essential for patients arriving on psychiatric wards and offer comfort and dignity to patients during a challenging time. We also list snacks and activities that can be included in the bags.</p>
          <Button href="https://www.amazon.co.uk/hz/wishlist/ls/2B8A3SKRC0F49?ref_=wl_share" target="_blank" className={styles.button} variant={{ colour: "blue" }}>Amazon Wishlist</Button>
        </div>
      </MaxWidthWrapper>

      <ContactForm title="Get in Touch" text="We're a small team and we're always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we'll be in touch." />
    </>
  );
};
export default Page;