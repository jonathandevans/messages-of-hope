import { Button } from "@/components/button/button";
import styles from "./page.module.css";

export const MessageSubmission = () => {
  return (
    <form className={styles.form}>
      <textarea placeholder="Write your message here..." rows={10} required className={styles.textArea}/>
      <div className={styles.inner}>
        <input placeholder="Instagram Handle" className={styles.input} />
        <Button type="submit" className={styles.button} variant={{ colour: "blue" }}>Submit Message</Button>
      </div>
    </form>
  );
};