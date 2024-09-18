import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import styles from "./page.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Banner title="Connections 2024" image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435265/eT3lf4bF2M_tl9glu.jpg" short={true} />

      <MaxWidthWrapper className={styles.panel}>
        <article>
          <h2>What is Connections 2024?</h2>
          <p>Connections 2024 is a poignant short film created by Messages of Hope and Speakers Collective for Great Mental Health Day 2024. Connections delves into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.</p>
          <p>Our aspiration with Connections 2024 is to ignite a ripple effect of compassion and support, encouraging viewers to extend a hand of empathy to those in need and remind them that they are never alone in their journey towards healing.</p>
        </article>
        
        <div className={styles.videos}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dFJHklUGYTU?si=vNRTEzGAvH8Pj0m-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/X8Cu-JvoXSc?si=k0cW5tOFjyUm7bHF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>

        <article>
          <h2>Who was involved?</h2>
          <p>Connections 2024 was made possible through the generous funding from The Mayor of London, Sadiq Khan, which we believe reflects his commitment to fostering the mental well-being of Londoners. Collaborating closely with Thrive LDN and Speakers Collective, Messages of Hope orchestrated the creation of this film, uniting diverse voices and talents in a collective effort to spread messages of hope and support.</p>
          <p>People from all over London were involved in writing messages of hope for Connections and we also worked with several dancers, including the incredible Speaker Box Street Party.</p>
          <p>It was a huge honour to have been able to work with Speakers Collective and have the support of both The Mayor of London, Sadiq Khan, and Public Health Director, Kevin Fenton on Connections 2024.</p>
        </article>

        <article>
          <h2>The Connections Premiere & Gallery Viewing</h2>
          <p>The evening of Great Mental Health Day 2024 saw the premiere of Connections at City Lit in London. In addition to the premiere viewing of Connections, City Lit displayed photography captured throughout the Connections filming process in their gallery from January 22nd to January 28th.</p>
        </article>
      </MaxWidthWrapper>

      <section className={styles.darkPanel}>
        <MaxWidthWrapper>
          <p>We would like to give a special thanks to our incredible volunteers that helped us bring Connections 2024 together. From approaching strangers to ask for messages of hope, to dancing in the streets of London, they did it all! Thank you again because without you, Connections 2024 wouldn't have been possible.</p>
        </MaxWidthWrapper>
      </section>

      {/* <MaxWidthWrapper className={styles.panel}>
        <article>
          <h2>The Connections Premiere & Gallery Viewing</h2>
          <p>The evening of Great Mental Health Day 2024 saw the premiere of Connections at City Lit in London. In addition to the premiere viewing of Connections, City Lit displayed photography captured throughout the Connections filming process in their gallery from January 22nd to January 28th.</p>
        </article>
        <article>
          <h2>Messages of Hope X Speaker Box Street Party</h2>
          <p>In order to ensure the success of Connections 2024, we knew from the outset that involving Speaker Box Street Party was essential. Speaker Box is an incredible community organisation that successfully uses dance as a powerful tool to make the World, and in particular, London, a better place.</p>
          <p>Speaker Box Street Party brought immense fun and positivity to one of our filming days and helped us create an incredible dance party in London's beautiful Covent Garden. We were overwhelmed by the support that we received from everyone that got involved and danced with us for Connections 2024.</p>
        </article>
      </MaxWidthWrapper> */}

      <MaxWidthWrapper className={styles.images}>
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726434871/bl4m2UPETa_slguyb.jpg" alt="Mother and daughter holding a whiteboard with a message of hope written in Spanish" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435029/5CnpFGoOdE_k3kxev.jpg" alt="Speaker Box Street Party holding a whiteboard with a message of hope" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435152/uNbak2l7po_n9ziod.jpg" alt="A dog at the filming of Connections 2024" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435314/H7cLgJSMml_cicq0s.jpg" alt="Man holding a whiteboard with the message 'Keep going, everything will be okay'" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435405/CdTHi5Z0WZ_ergfh4.jpg" alt="Bethan holding a whiteboard with the message 'One day someone is going to need to hear your story'" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435538/2KlsLHgJsO_c95ke2.jpg" alt="Father and daughter drawing on a whiteboard during the Connections 2024 filming" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435614/IkyP20lYFw_dxu1sg.jpg" alt="A family holding a whiteboard with 'hope' written on it" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435679/PtSSYegxG0_kqt4qv.jpg" alt="The filming of Connections 2024" width={400} height={400} />
        <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726435738/90m1s9J70V_jauwnv.jpg" alt="Young people writing messages of hope during the Connections 2024 filming" width={400} height={400} />
      </MaxWidthWrapper>
    </>
  );
};
export default Page;