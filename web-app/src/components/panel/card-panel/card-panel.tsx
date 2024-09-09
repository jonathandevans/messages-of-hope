import { HTMLAttributes } from "react";
import { Button } from "@/components/button/button";
import styles from "./card-panel.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title : string;
  imageSrc : string;
  imageAlt : string;
  text: string;
  href: string;
};

interface CardPanelProps extends HTMLAttributes<HTMLDivElement> {
  title : string;
  cards : CardProps[];
};

const Card = ({ title, imageSrc, imageAlt, text, href } : CardProps) => {
  return (
    <article className={styles.card}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <p>{text}</p>
        <Button href={href} variant={{ name: "fill", size: "sm", colour: "darkBlue" }}>Learn More</Button>
      </div>
      <img src={imageSrc} alt={imageAlt}/>
    </article>
  );
};

export const CardPanel = ({ title, cards } : CardPanelProps) => {
  return (
    <section className={styles.panel}>
      <h2>{title}</h2>
      <div className={styles.content}>
        { cards.map((card, i) => (<Card key={i} {...card}/>)) }
      </div>
    </section>
  );
};