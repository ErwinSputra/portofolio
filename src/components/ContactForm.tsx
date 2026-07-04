"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdlobeo";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.formCard}>
        <p className={styles.successMessage}>
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or idea..."
          required
          rows={5}
          className={styles.textarea}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="budget" className={styles.label}>
          Budget (Optional)
        </label>
        <select id="budget" name="budget" className={styles.select}>
          <option value="">Select your budget range</option>
          <option value="Under $100">Under $100</option>
          <option value="$100–$500">$100–$500</option>
          <option value="$500–$1,500">$500–$1,500</option>
          <option value="$1,500+">$1,500+</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submitButton}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
