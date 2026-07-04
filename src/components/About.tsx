import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const values = [
  { icon: "→", label: "Fast Delivery" },
  { icon: "✦", label: "Clean Code" },
  { icon: "◎", label: "Problem Solver" },
  { icon: "↗", label: "Always Learning" },
];

export default function About() {
  return (
    <div className={styles.wrapper}>
      <section id="about" className={styles.section}>
        <div className={styles.left}>
          <span className={styles.label}>ABOUT ME</span>
          <h2 className={styles.heading}>
            I Learn Fast.
            <br />I Build Faster.
          </h2>
          <p className={styles.description}>
            I got into tech because I&apos;ve always loved solving problems —
            the same reason I gravitated toward physics and math growing up.
            Building something from scratch and seeing it actually work for
            people? That&apos;s what keeps me going.
          </p>
          <p className={styles.description}>
            I&apos;m self-taught beyond the fundamentals, which means I know how
            to figure things out — fast. Whether it&apos;s a simple portfolio or
            a complex full-stack platform, I approach every project with the
            same mindset: ship it fast, make it work, and make it last.
          </p>
          <p className={styles.description}>
            When I take on a client, I treat their project like my own. Clean
            code, good performance, no shortcuts.
          </p>
          <div className={styles.values}>
            {values.map((v) => (
              <div key={v.label} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <span className={styles.valueLabel}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/erwin.png"
              alt="Erwin Saputra"
              width={480}
              height={560}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div id="hire-me" className={styles.contact}>
        <p className={styles.contactLabel}>CONTACT</p>
        <h3 className={styles.contactHeading}>
          Interested in working together?
        </h3>
        <p className={styles.contactSub}>
          I&apos;m currently open for freelance work.
          <br />
          Let&apos;s build something great.
        </p>
        <div className={styles.contactCards}>
          <a
            href="mailto:erwinsputra757@email.com"
            className={styles.contactCard}
          >
            <div className={styles.contactCardIconWrapper}>
              <FaEnvelope size={22} color="var(--accent)" />
            </div>
            <span className={styles.contactCardLabel}>EMAIL</span>
            <span className={styles.contactCardValue}>
              erwinsputra757@email.com
            </span>
            <span className={styles.contactCardAction}>Send an email →</span>
          </a>
          <Link
            href="https://www.linkedin.com/in/erwin-saputra-13a846218"
            className={styles.contactCard}
            target="_blank"
          >
            <div className={styles.contactCardIconWrapper}>
              <FaLinkedin size={22} color="var(--accent)" />
            </div>
            <span className={styles.contactCardLabel}>LINKEDIN</span>
            <span className={styles.contactCardValue}>Erwin Saputra</span>
            <span className={styles.contactCardAction}>View profile →</span>
          </Link>
          <Link
            href="https://github.com/ErwinSputra"
            className={styles.contactCard}
            target="_blank"
          >
            <div className={styles.contactCardIconWrapper}>
              <FaGithub size={22} color="var(--accent)" />
            </div>
            <span className={styles.contactCardLabel}>GITHUB</span>
            <span className={styles.contactCardValue}>
              github.com/ErwinSputra
            </span>
            <span className={styles.contactCardAction}>View profile →</span>
          </Link>
        </div>
        <a href="mailto:erwinsputra757@email.com" className={styles.cta}>
          <FiSend size={20} />
          Let&apos;s Work Together
        </a>
        <p className={styles.contactReply}>
          <FiCheckCircle size={15} color="var(--accent)" />I typically reply
          within 24 hours
        </p>
      </div>
    </div>
  );
}
