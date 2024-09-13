import Link from "next/link";
import styles from "./link-grid.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/button/button";

interface LinkGridProps {
  title : string;
  name : string;
  text : string[];
  image : string;
  href : string;
  additionalLinksTitle : string;
  additionalLinks : { title : string, href : string, image : string }[];
  forwardLinkLabel? : string;
  forwardLinkHref? : string;
};

export const LinkGrid = ({ title, name, text, image, href, additionalLinksTitle, additionalLinks, forwardLinkLabel, forwardLinkHref } : LinkGridProps) => {
  return (
    <section className={styles.panel}>
      <h2>{title}</h2>
      <div className={styles.hero}>
        <img src={image} />
        <div>
          <h3>{name}</h3>
          {text.map((_text, index) => (
            <p key={index}>{_text}</p>
          ))}
          <Button href={href} variant={{ name: "fill", size: "sm", colour: "yellow" }} className={styles.learnMore}>Learn More</Button>
        </div>
      </div>

      <div className={styles.additionalLinks}>
        <div className={styles.linksHeader}>
          <h3>{additionalLinksTitle}</h3>
          {forwardLinkLabel && forwardLinkHref &&  <Button href={forwardLinkHref} variant={{ name: "fill", size: "sm", colour: "blue" }} className={styles.forward}>{forwardLinkLabel}</Button>}
        </div>
        
        <div className={styles.links}>
          {additionalLinks.map((_link, index) => (
            <Link className={styles.link} key={index} href={_link.href} style={{ 
              background: `linear-gradient(0deg, rgba(152,211,231,0.3) 0%, rgba(152,211,231,0.15) 55%, rgba(152,211,231,0) 100%),
                          url('${process.env.NEXT_PUBLIC_SERVER_URL}/${_link.image}') center/cover no-repeat, 
                          var(--zinc-100)`
            }}>
              <span className={styles.text}>
                <span>{_link.title}</span>
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
