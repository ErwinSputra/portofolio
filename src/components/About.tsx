import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const values = [
  { icon: "→", label: "Fast Delivery" },
  { icon: "◎", label: "Problem Solver" },
  { icon: "✦", label: "Clean Code" },
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
    </div>
  );
}
