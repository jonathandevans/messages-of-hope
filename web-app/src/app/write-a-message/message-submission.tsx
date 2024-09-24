"use client";

import { useState } from "react";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import { Button } from "@/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { checkMessageSubmission } from "@/lib/validator";
import { submitMessage } from "./actions";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
  title: "Write a Message",
  description:
    "Write a message of hope to share with the world. Messages of Hope collects messages of hope and spreads them far and wide.",
});

export const MessageSubmission = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formElements = form.elements;
    const formContent = {
      message: (formElements.namedItem("message") as HTMLTextAreaElement).value,
      handle: (formElements.namedItem("handle") as HTMLInputElement).value,
    };

    const valid = checkMessageSubmission(formContent);
    if (valid.error) setError(valid.error);

    const response = await submitMessage(formContent);
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
            <h3>Message Sent!</h3>
            <p>
              Thank you for your message. Be sure to keep an eye on our
              Instagram for your message in a post.
            </p>
            <Button
              variant={{ colour: "blue" }}
              onClick={() => setSuccess(false)}
            >
              Close
            </Button>
          </div>
        </>
      ) : null}
      <form className={styles.form} onSubmit={onSubmit}>
        {error != "" ? (
          <div className={styles.error}>
            <p>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className={styles.icon}
              />{" "}
              {error}
            </p>
          </div>
        ) : null}
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={10}
          required
          className={styles.textArea}
        />
        <div className={styles.inner}>
          <input
            name="handle"
            placeholder="Instagram Handle (Optional)"
            className={styles.input}
          />
          <Button
            type="submit"
            className={styles.button}
            variant={{ colour: "blue" }}
          >
            Submit Message
          </Button>
        </div>
      </form>
    </>
  );
};
