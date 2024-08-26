"use client";

import React, { useEffect, useRef, useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactForm.module.css";

const Popup = ({ closePopup, title, message, buttonText } : { closePopup : () => void; title : string; message : string; buttonText : string; }) => {
  return (
    <Fragment>
      <div className={styles.overlay} onClick={closePopup} />
      <div className={styles.popup}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button className={styles.button} onClick={closePopup}>{buttonText}</button>
      </div>
    </Fragment>
  );
};

const ContactForm = ({ title, text } : { title : string; text : string; }) => {
  const [status, setStatus] = useState(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const organisationRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Clear the form fields when the email is sent successfully.
   */
  useEffect(() => {
    if (status === null || status === "error") return;

    nameRef.current!.value = "";
    emailRef.current!.value = "";
    organisationRef.current!.value = "";
    subjectRef.current!.value = "";
    messageRef.current!.value = "";
  }, [status]);

  /**
   * Send a POST request to the server to send an email.
   * @param {*} event The form submission event
   */
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  /**
   * Close the popup.
   */
  const closePopup = () => {
    setStatus(null);
  }

  return (
    <Fragment>
      {
        status === "success" ? (
          <Popup title="Speak Soon!" buttonText="Close" message="Your message has been sent successfully." closePopup={closePopup} />
        ) : status === "error" ? (
          <Popup title="Oops!" buttonText="Close" message="An error occurred while sending your message. Please try again later." closePopup={closePopup} />
        ) : null
      }
      <section className={styles.contact_panel}>
        <div className={styles.inner_container}>
          <h3>{title}</h3>
          <p>{text}</p>
          <form className={styles.contact_form} onSubmit={sendEmail}>
            <div className={styles.contact_form_content}>
              <div className={styles.inputs}>
                <input ref={nameRef} name="name" type="text" placeholder="Name*" required autoComplete="on"/>
                <input ref={emailRef} name="email" type="email" placeholder="Email*" required autoComplete="on"/>
                <input ref={organisationRef} name="organisation" type="text" placeholder="Business/Organisation"/>
                <input ref={subjectRef} name="subject" type="text" placeholder="Subject*" required/>
              </div>
              <textarea ref={messageRef} name="message" placeholder="Message..." required rows={10} />
            </div>
            <button className={styles.contact_button} type="submit">
              Send Message
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default ContactForm;