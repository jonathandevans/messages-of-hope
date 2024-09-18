import { Banner } from "@/components/panel/banner/banner";
import styles from "./page.module.css";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { Button } from "@/components/button/button";

const Page = () => {
  return (
    <>
      <Banner title="Our Creator" image="https://res.cloudinary.com/dmto5tfe5/image/upload/c_crop,w_6000,h_2400/v1726430037/Bethan%20Evans%20-%20Connections%202024.jpg" short={true} />

      <MaxWidthWrapper className={styles.panel}>
        <p>Bethan Evans is the Creator and Director of Messages of Hope.</p>
        <p>Messages of Hope was first created in 2020. However between the years of 2019 and 2022 Bethan was at war with her mental health, more specifically Borderline Personality Disorder, therefore the growth and development of Messages of Hope slipped far down on her list of priorities.</p>
        <p>In November 2022 Bethan made an extremely serious attempt to end her life which resulted in her hospitalisation. Following this suicide attempt Bethan made a conscious effort to turn her life around and to this day, she remains in recovery and out of hospital for over a year.</p>
        <p>Bethan wants to use her story to inspire others to keep fighting. She wants everyone to know that they have a purpose in this world and usually we feel most lost right before we are found. Suicide is not the answer and it never will be.</p>
        <p>Bethan is also passionate about supporting patients that arrive in hospitals for psychiatric admissions. After spending four years of her life in and out of hospitals and psychiatric facilities, Bethan knows just how traumatic and life altering every admission can be.</p>
        <p>On several occasions Bethan would be admitted to hospital without any of her belongings, and recalls several times when she would have to sit for days in clothes soaked with vomit and her hair matted. The lack of dignity and respect Bethan and so many other patients are shown during psychiatric admissions is something she only began to reflect on once she had entered recovery. Once she began to reflect she knew she had to do what she could to help those in a similar position.</p>
        <p>Bethan created Bags of Hope in 2023 in order to provide patients arriving in hospital for psychiatric admission with the essentials, such as, body wash, wipes, socks and pants.</p>
        <Button href="/projects/bags-of-hope" variant={{ colour: "blue", size: "lg" }}>Bags of Hope</Button>
        <p>Bethan promises to do what she can to support and advocate for the mentally ill and she hopes that she can be a voice for those with Borderline Personality Disorder.</p>
      </MaxWidthWrapper>

      <MessageSlideshow />
    </>
  );
};
export default Page;