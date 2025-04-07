"use client";

import { ArrowRight, Check, CircleX } from "lucide-react";
import styles from "./message-submission.module.css";
import { useState } from "react";

const MessageSubmission = () => {
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<boolean>(false);

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
      message: (formElements.namedItem("message") as HTMLTextAreaElement).value,
      handle: (formElements.namedItem("instagram-handle") as HTMLInputElement)
        .value,
    };

    const response = await fetch("/api/messages", {
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
    <form className={styles.form} onSubmit={onSubmit}>
      {error && (
        <p className={styles.error}>
          <CircleX /> {error}
        </p>
      )}
      {success && (
        <p className={styles.success}>
          <Check /> Your message has been submitted successfully!
        </p>
      )}

      <textarea
        className={styles.textarea}
        placeholder="Write your message of hope here..."
        rows={10}
        required
        name="message"
        id="message"
      />
      <div className={styles.base}>
        <div className={styles.handle}>
          <label htmlFor="instagram-handle">Instagram Handle (optional)</label>
          <input
            type="text"
            id="instagram-handle"
            name="instagram-handle"
            placeholder="@yourhandle"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit Message
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
};
export default MessageSubmission;
