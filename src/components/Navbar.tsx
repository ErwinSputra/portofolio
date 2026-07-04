import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoGroup}>
        <span className={styles.logo}>Erwin Saputra</span>
        <span className={styles.tagline}>Freelance Web Developer</span>
      </Link>
      <div className={styles.rightGroup}>
        <ul className={styles.links}>
          {["About", "Projects"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={styles.link}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact-me" className={styles.ctaButton}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
