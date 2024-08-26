import { HTMLAttributes } from "react";
import styles from "./Button.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  href? : string;
  onClick? : () => void;
  variant? : {
    colour? : string;
    border? : string;
    icon? : boolean;
  };
};

const Button = ({ className : _className, children, onClick, variant, href } : ButtonProps) => {
  const { colour, border, icon = true } = variant || {};

  let className = `${styles.button} ${_className ? _className : ""}`;
  if (colour) className += ` ${styles[colour]}`;
  if (icon) className += ` ${styles.icon}`

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
        <FontAwesomeIcon aria-hidden="true" icon={faArrowRight} className={styles.arrow}/>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;