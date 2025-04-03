"use client";

import { HTMLAttributes, useState } from "react";
import styles from "./contact-form.module.css";

interface ContactFormProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const ContactForm = ({
  title = "Contact Us",
  description = "Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope project or would like to collaborate with us in any capacity we would love to hear from you.",
}: ContactFormProps) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Send a POST request to the server to send an email.sendEmail
   * @param {*} event The form submission event
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const formElements = form.elements;
    const formContent = {
      name: (formElements.namedItem("name") as HTMLInputElement).value,
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContent),
    });
    const data = await response.json();

    if (data.error) setError(data.error);
    if (data.success) {
      form.reset();
      setSuccess(true);
    }
  };

  return (
    <>
      <section className={styles.panel}>
        <h2>{title}</h2>
        <p>{description}</p>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.content}>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name*"
                required
                autoComplete="on"
              />
              <input
                name="email"
                type="email"
                placeholder="Email*"
                required
                autoComplete="on"
              />
              <input
                name="organisation"
                type="text"
                placeholder="Business/Organisation"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject*"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              required
              rows={10}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};
export default ContactForm;
