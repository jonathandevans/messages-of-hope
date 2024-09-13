import { HTMLAttributes } from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  href? : string;
  type? : "button" | "submit" | "reset";
  onClick? : () => void;
  target? : "_blank" | "_self" | "_parent" | "_top";
  variant? : {
    name? : "standard" | "bordered" | "outline" | "fill";
    size? : "sm" | "md" | "lg" | "xl";
    colour? : "zinc" | "blue" | "yellow" | "darkBlue" | "green" | "red" | "transparent";
    icon? : boolean;
    dark? : boolean;
  };
};

const Arrow = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className={styles.arrow} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
    </svg>
  );
};

export const Button = ({ style : _style, className : _className, children, onClick, variant, href, type, target } : ButtonProps) => {
  const { name = "standard", size = "md", colour = "zinc", icon = true, dark = false } = variant || {};

  let className = `${styles.button} ${_className ? _className : ""}`;
  if (name) className += ` ${styles[name]}`;
  if (size) className += ` ${styles[size]}`;
  if (colour) className += ` ${styles[colour]}`;
  if (icon) className += ` ${styles.icon}`;
  if (dark) className += ` ${styles.dark}`;
  

  if (href) {
    return (
      <Link style={_style} className={className} href={href} target={target || "_self"}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button style={_style} className={className} onClick={onClick} type={type || "button"}>
      {children}
      <Arrow />
    </button>
  );
};