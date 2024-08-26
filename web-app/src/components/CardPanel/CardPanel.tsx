import { HTMLAttributes } from "react";
import Button from "@/components/Button/Button";
import styles from "./CardPanel.module.css";
import Link from "next/link";

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
        <Link href={href}>Learn More</Link>
      </div>
      <img src={imageSrc} alt={imageAlt}/>
    </article>
  );
};

const CardPanel = ({ title, cards } : CardPanelProps) => {
  return (
    <section className={styles.panel}>
      <h2>{title}</h2>
      <div className={styles.content}>
        { cards.map((card, i) => (<Card key={i} {...card}/>)) }
      </div>
    </section>
  );
};
export default CardPanel;