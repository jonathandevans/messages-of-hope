"use client";

import { useState, useRef, useEffect, HTMLAttributes } from "react";
import styles from "./messages-panel.module.css";

const staticMessages = [
  "Life is a journey and everyone's different. No matter how many times you fall please get back up. You don't know what the future will bring or what's around the corner for you. Just take one step at a time no matter how small that is, even if it's a wrong turn or backwards just keep going. Lots of love from a survivor.",
  "I am so proud of you for getting through everything that had lead you to this moment.",
  "Even on your darkest days, there is always hope. You are your unique self, there is no one in the world like you, or ever will be. One day, someone will need you, let them have that chance.",
];

interface MessagePanelProps extends HTMLAttributes<HTMLDivElement> {}

const MessagePanel = ({ className: _className } : MessagePanelProps) => {
  const [messages, setMessages] = useState(staticMessages);
  const currentMessage = useRef(0);

  useEffect(() => {
    const fetchMessages = async () => {
      const mess = await fetch("/api/messages");
      if (!mess.ok) {
        console.error("Failed to fetch messages");
        return;
      }
      const data = await mess.json();
      if (data.error) {
        console.error(data.error);
        return;
      }
      if (data.messages) {
        setMessages(data.messages);
      }
    };
    fetchMessages();
  }, []);

  const nextMessage = () => {
    let mess = document.getElementById(
      "message-div__" + currentMessage.current
    );
    mess!.classList.add(styles.after);
    setTimeout(() => {
      let id = currentMessage.current - 1;
      if (id < 0) {
        id = messages.length - 1;
      }
      let _mess = document.getElementById("message-div__" + id);
      _mess!.classList.add(styles.hidden);
      _mess!.classList.remove(styles.after);
    }, 1000);

    currentMessage.current = (currentMessage.current + 1) % messages.length;
    mess = document.getElementById("message-div__" + currentMessage.current);
    mess!.classList.remove(styles.hidden);
  };

  useEffect(() => {
    const interval = setInterval(nextMessage, 10000);
    return () => clearInterval(interval);
  }, [messages]);

  return (
    <section className={`${_className ? _className : ""}  ${styles.panel}`}>
      <svg
        className={styles.art1}
        width="469"
        height="437"
        viewBox="0 0 469 437"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-44.05 294.808C-399.464 846.236 486.769 -103.846 364.319 584.736"
          stroke="#DB7706"
          strokeWidth="9"
        />
        <path
          d="M-12.3055 -116.268C-12.3055 -116.268 141.421 131.399 55.5 229.421C-51 350.921 187.195 520.732 187.195 520.732"
          stroke="#DB7706"
          strokeWidth="8"
        />
        <path
          d="M-45.5 38.9213C-45.5 38.9213 -6 423.921 108 320.922C242.302 199.579 239.657 460.923 298.5 524.921"
          stroke="#F59F0A"
          strokeWidth="7"
        />
      </svg>
      <svg
        className={styles.art2}
        width="472"
        height="437"
        viewBox="0 0 472 437"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M277.176 -104.5C277.176 -104.5 316.676 280.5 430.676 177.501C564.978 56.1584 562.334 317.502 621.176 381.5"
          stroke="#F59F0A"
          strokeWidth="7"
        />
        <path
          d="M58.3036 -13.6538C214 308.5 374.5 -76.4999 499.5 308.5"
          stroke="#DB7706"
          strokeWidth="9"
        />
        <path
          d="M161.176 -91.4996C161.176 -91.4996 19.5001 445 285 163C535.93 -103.525 446.334 330.502 505.176 394.5"
          stroke="#F59F0A"
          strokeWidth="7"
        />
      </svg>

      <div className={styles.inner}>
        {messages.map((message, index) => {
          return (
            <div
              id={"message-div__" + index}
              key={index}
              className={index == 0 ? "" : styles.hidden}
            >
              <p>{message}</p>
              <p>- Anonymous -</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MessagePanel;
