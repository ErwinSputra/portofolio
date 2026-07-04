"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoGroup} onClick={closeMenu}>
        <span className={styles.logo}>Erwin Saputra</span>
        <span className={styles.tagline}>Freelance Web Developer</span>
      </Link>

      {/* Desktop nav */}
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

      {/* Mobile hamburger toggle */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.barOpen1 : styles.bar} />
        <span className={menuOpen ? styles.barOpen2 : styles.bar} />
        <span className={menuOpen ? styles.barOpen3 : styles.bar} />
      </button>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {["About", "Projects"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={styles.mobileLink}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact-me"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
}
