import { HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./text-panel.module.css";

interface TextPanelProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc : string;
  imageAlt : string;
  title? : string;
  wide? : boolean;
  variant? : {
    colour? : string;
    position? : string;
    roundedCorner? : string;
  };
};

const Deco = ({ pos } : { pos : string; }) => {
  const randomClasses = [ styles.deco1, styles.deco2, styles.deco3 ];
  for (let i=0; i<randomClasses.length; i++) {
    const j = Math.floor(Math.random() * randomClasses.length);
    const temp = randomClasses[j];
    randomClasses[j] = randomClasses[i];
    randomClasses[i] = temp;
  }

  return (
    <svg aria-hidden="true" className={`${pos} ${styles.svg}`} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 99">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className={randomClasses[1]} cx="67.5" cy="70.5" r="24.5"/>
        <circle className={`${randomClasses[0]} ${styles.ani}`} cx="105.5" cy="74.5" r="24.5"/>
        <circle className={randomClasses[2]} cx="78" cy="35" r="35"/>
        <path className={`${randomClasses[0]} ${styles.ani}`} d="M39,20c18.2,0,33,14.8,33,33s-14.8,33-33,33S6,71.2,6,53,20.8,20,39,20M39,14C17.46,14,0,31.46,0,53s17.46,39,39,39,39-17.46,39-39S60.54,14,39,14h0Z"/>
      </g>
    </svg>
  );
};

export const TextPanel = ({ imageSrc, imageAlt, title, variant, children, className } : TextPanelProps) => {
  return (
    <section className={`${className} ${styles.panel}`}>
      <div className={styles.contentContainer}>
        {title ? <h2>{title}</h2> : null}
        <div className={styles.content}>
          {children}
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <img src={imageSrc} />
        <Deco pos={styles.topRight} />
        <Deco pos={styles.bottomLeft} />
      </div>
    </section>
  );
};