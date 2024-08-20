import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant? : {
    colour? : string;
    border? : string;
  };
};

const Button = ({ className : _className, children, onClick, variant } : ButtonProps) => {
  let className = `${styles.button} ${_className ? _className : ""}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;