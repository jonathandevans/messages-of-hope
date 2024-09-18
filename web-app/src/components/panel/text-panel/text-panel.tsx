import { ReactNode } from "react";
import styles from "./text-panel.module.css";
import { MaxWidthWrapper } from "../max-width-wrapper/max-width-wrapper";

interface DecoProps {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

interface TextPanelProps {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  variant?: {
    colour?: "blue" | "yellow";
    textPosition?: "right" | "left";
    corner?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    deco?: ("topLeft" | "topRight" | "bottomLeft" | "bottomRight")[];
  };
}

const Deco = ({ position }: DecoProps) => {
  const randomColours = [styles.col1, styles.col2, styles.col3];
  for (let i = 0; i < randomColours.length; i++) {
    const j = Math.floor(Math.random() * randomColours.length);
    const temp = randomColours[j];
    randomColours[j] = randomColours[i];
    randomColours[i] = temp;
  }

  return (
    <svg
      aria-hidden="true"
      className={`${styles[position]} ${styles.svg}`}
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 99"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className={randomColours[1]} cx="67.5" cy="70.5" r="24.5" />
        <circle
          className={`${randomColours[0]} ${styles.animate1}`}
          cx="105.5"
          cy="74.5"
          r="24.5"
        />
        <circle
          className={`${randomColours[2]} ${styles.animate2}`}
          cx="78"
          cy="35"
          r="35"
        />
        <path
          className={`${randomColours[0]} ${styles.animate3}`}
          d="M39,20c18.2,0,33,14.8,33,33s-14.8,33-33,33S6,71.2,6,53,20.8,20,39,20M39,14C17.46,14,0,31.46,0,53s17.46,39,39,39,39-17.46,39-39S60.54,14,39,14h0Z"
        />
      </g>
    </svg>
  );
};

export const TextPanel = ({
  imageSrc,
  imageAlt,
  title,
  variant,
  children,
  className : _className,
  contentClassName = "",
}: TextPanelProps) => {
  const { colour = "yellow", textPosition = "left", corner, deco : _deco } = variant || {};
  let className = `${styles.panel} ${_className} ${styles[colour]} ${styles[textPosition]}`;

  let deco: ("topLeft" | "topRight" | "bottomLeft" | "bottomRight")[] = [];
  if (textPosition == "left") {
    if (!_deco) deco = [ "topLeft", "bottomRight" ];
    else deco = _deco;
    className += ` ${corner ? styles[corner] : styles.bottomLeft}`;
  }
  if (textPosition == "right") {
    if (!_deco) deco = [ "topRight", "bottomLeft" ];
    else deco = _deco;
    className += ` ${corner ? styles[corner] : styles.bottomRight}`;
  }

  return (
    <MaxWidthWrapper className={className}>
      <div className={styles.contentContainer}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <div className={contentClassName}>
          {children}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
        {deco.map((position, index) => (
          <Deco key={index} position={position} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
