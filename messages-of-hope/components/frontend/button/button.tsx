import Link from "next/link";
import { HTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  colour?:
    | "zinc"
    | "blue"
    | "yellow"
    | "darkBlue"
    | "green"
    | "red"
    | "outline";
}

const Button = ({
  style: _style,
  className: _className,
  id: _id,
  children,
  href,
  target = "_self",
  colour = "blue",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      style={_style}
      id={_id}
      className={`${styles.button} ${styles[`${colour}`]} ${_className}`}
    >
      {children}
    </Link>
  );
};
export default Button;
