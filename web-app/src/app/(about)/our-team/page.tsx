import { Metadata } from "next";
import { Banner } from "@/components/panel/banner/banner";
import { ContactForm } from "@/components/panel/contact-form/contact-form";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { generateMetadata } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Our Team",
  description:
    "Meet the team behind Messages of Hope and find out how you can get involved.",
});

const team = [
  {
    name: "Bethan Evans",
    role: "Founder and Director",
    image:
      "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726698435/Bethan_Evans_Profile_1_ma8qkk.jpg",
    bio: [
      "Bethan is the founder of Messages of Hope. She is a mental health advocate and a filmmaker, passionately using creativity to spread messages of hope and support to those struggling with their mental health. Bethan's personal experiences with Borderline Personality Disorder and her journey through recovery deeply inform her work, driving her commitment to inspire others and advocate for better mental health care. ",
    ],
  },
  {
    name: "Jonathan Evans",
    role: "Director",
    image:
      "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726698551/Jonathan_Evans_Profile_1_liza9t.jpg",
    bio: [
      "Jonathan is a director of Messages of Hope. His passion for using creativity to spread messages of hope stems from witnessing the toll mental health struggles have taken on people in his life. Motivated by these personal experiences, Jonathan is dedicated to supporting those facing similar challenges. He plays a crucial role in organizing and overseeing various initiatives, such as collaborative art projects and video campaigns, to inspire and uplift individuals struggling with their mental health.",
    ],
  },
  {
    name: "Teddy Bear",
    role: "Director of Cuddles",
    image:
      "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726698648/Teddy_Bear_Profile_1_sf5rcj.jpg",
    bio: [
      "Teddy is the Director of Cuddles at Messages of Hope. With a wagging tail and a heart full of love, she is passionate about using cuddles to spread messages of hope and support to those struggling with their mental health. Her role as the Director of Cuddles is crucial in creating a warm and welcoming environment. Teddy's unwavering dedication to offering unconditional love and comfort makes her an invaluable member of the team.",
    ],
  },
];

const Page = () => {
  return (
    <>
      <Banner
        title="Our Team"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726698368/Connections_2024_Hoodies_1_gt6l1z.jpg"
        short={true}
      />

      <MaxWidthWrapper className={styles.panel}>
        {team.map((member, index) => (
          <article key={index} className={styles.member}>
            <img src={member.image} alt={member.name} />
            <div className={styles.text}>
              <h4>{member.name}</h4>
              <h6>{member.role}</h6>
              {member.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </MaxWidthWrapper>

      <ContactForm
        title="Help us out"
        text="We're a small team and we're always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we'll be in touch."
      />
    </>
  );
};
export default Page;
