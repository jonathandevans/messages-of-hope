import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Connections 2024",
  description:
    "Connections 2024 is a poignant short film created by Messages of Hope, delving into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="Connections 2024"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726699597/eT3lf4bF2M_tl9glu_1_hmnuzy.jpg"
        short={true}
      />

      <MaxWidthWrapper className={styles.panel}>
        <article>
          <h2>What is Connections 2024?</h2>
          <p>
            Connections 2024 is a poignant short film created by Messages of
            Hope and Speakers Collective for Great Mental Health Day 2024.
            Connections delves into the transformative power of connection
            amidst mental health struggles. Through capturing the heartfelt
            messages penned by Londoners, the film illuminates the profound
            sense of empathy and solidarity within our communities. Each message
            serves as a beacon of hope, affirming that even in the darkest
            moments, there are individuals who genuinely care.
          </p>
          <p>
            Our aspiration with Connections 2024 is to ignite a ripple effect of
            compassion and support, encouraging viewers to extend a hand of
            empathy to those in need and remind them that they are never alone
            in their journey towards healing.
          </p>
        </article>

        <div className={styles.videos}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dFJHklUGYTU?si=vNRTEzGAvH8Pj0m-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X8Cu-JvoXSc?si=k0cW5tOFjyUm7bHF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <article>
          <h2>Who was involved?</h2>
          <p>
            Connections 2024 was made possible through the generous funding from
            The Mayor of London, Sadiq Khan, which we believe reflects his
            commitment to fostering the mental well-being of Londoners.
            Collaborating closely with Thrive LDN and Speakers Collective,
            Messages of Hope orchestrated the creation of this film, uniting
            diverse voices and talents in a collective effort to spread messages
            of hope and support.
          </p>
          <p>
            People from all over London were involved in writing messages of
            hope for Connections and we also worked with several dancers,
            including the incredible Speaker Box Street Party.
          </p>
          <p>
            It was a huge honour to have been able to work with Speakers
            Collective and have the support of both The Mayor of London, Sadiq
            Khan, and Public Health Director, Kevin Fenton on Connections 2024.
          </p>
        </article>

        <article>
          <h2>The Connections Premiere & Gallery Viewing</h2>
          <p>
            The evening of Great Mental Health Day 2024 saw the premiere of
            Connections at City Lit in London. In addition to the premiere
            viewing of Connections, City Lit displayed photography captured
            throughout the Connections filming process in their gallery from
            January 22nd to January 28th.
          </p>
        </article>
      </MaxWidthWrapper>

      <section className={styles.darkPanel}>
        <MaxWidthWrapper>
          <p>
            We would like to give a special thanks to our incredible volunteers
            that helped us bring Connections 2024 together. From approaching
            strangers to ask for messages of hope, to dancing in the streets of
            London, they did it all! Thank you again because without you,
            Connections 2024 wouldn't have been possible.
          </p>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className={styles.images}>
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726699241/bl4m2UPETa_slguyb_1_it3hay.jpg"
          alt="Mother and daughter holding a whiteboard with a message of hope written in Spanish"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726699376/5CnpFGoOdE_k3kxev_1_gkehfp.jpg"
          alt="Speaker Box Street Party holding a whiteboard with a message of hope"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726747749/uNbak2l7po_vnmrmu.jpg"
          alt="A dog at the filming of Connections 2024"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726699779/H7cLgJSMml_cicq0s_1_zoxj05.jpg"
          alt="Man holding a whiteboard with the message 'Keep going, everything will be okay'"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726699932/CdTHi5Z0WZ_ergfh4_1_tdo0vy.jpg"
          alt="Bethan holding a whiteboard with the message 'One day someone is going to need to hear your story'"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700052/2KlsLHgJsO_c95ke2_1_n1fash.jpg"
          alt="Father and daughter drawing on a whiteboard during the Connections 2024 filming"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700188/IkyP20lYFw_dxu1sg_1_h0fe5o.jpg"
          alt="A family holding a whiteboard with 'hope' written on it"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700297/PtSSYegxG0_kqt4qv_1_kc0aqo.jpg"
          alt="The filming of Connections 2024"
          width={400}
          height={400}
        />
        <img
          src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700399/90m1s9J70V_jauwnv_1_owhrtt.jpg"
          alt="Young people writing messages of hope during the Connections 2024 filming"
          width={400}
          height={400}
        />
      </MaxWidthWrapper>
    </>
  );
};
export default Page;
