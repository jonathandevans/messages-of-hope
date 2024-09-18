"use client";

import React, { useState } from "react";
import { Button } from "@/components/button/button";
import styles from "./contact-form.module.css";
import { sendEmail } from "./actions";
import { checkContactForm } from "@/lib/validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


export const ContactForm = ({ title, text } : { title : string; text : string; }) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /**
   * Send a POST request to the server to send an email.
   * @param {*} event The form submission event
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    
    const form = event.currentTarget;
    const formElements = form.elements;
    const formContent = {
      name: (formElements.namedItem("name") as HTMLInputElement).value,
      email: (formElements.namedItem("email") as HTMLInputElement).value,
      organisation: (formElements.namedItem("organisation") as HTMLInputElement).value,
      subject: (formElements.namedItem("subject") as HTMLInputElement).value,
      message: (formElements.namedItem("message") as HTMLTextAreaElement).value
    };
    
    const valid = checkContactForm(formContent);
    if (valid.error) setError(valid.error);

    const response = await sendEmail(formContent);
    if (response.error) setError(response.error);
    if (response.success) {
      form.reset();
      setSuccess(true);
    }
  };

  return (
    <>
      {success ? (
        <>
          <div className={styles.backdrop} onClick={() => setSuccess(false)} />
          <div className={styles.popup}>
            <h3>Thank You!</h3>
            <p>We've received your message and will get back to you shortly.</p>
            <Button className={styles.button} variant={{ colour: "transparent", icon: false }} onClick={() => setSuccess(false)}>Close</Button>
          </div>
        </>
      ) : null}
      <section className={styles.panel}>
        <div className={styles.inner}>
          <h2>{title}</h2>
          <p>{text}</p>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.formContent}>
              <div className={styles.inputs}>
                <input name="name" type="text" placeholder="Name*" required autoComplete="on"/>
                <input name="email" type="email" placeholder="Email*" required autoComplete="on"/>
                <input name="organisation" type="text" placeholder="Business/Organisation"/>
                <input name="subject" type="text" placeholder="Subject*" required/>
              </div>
              <textarea name="message" placeholder="Message..." required rows={10} />
            </div>

            {error ? <div className={styles.error}>
              <p><FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon} /> {error}</p>
            </div> : null}

            <Button style={{ marginTop: "1rem" }} type="submit" variant={{ name: "bordered", colour: "transparent", dark: true }}>Send Message</Button>
          </form>
        </div>
      </section>
    </>
  );
};