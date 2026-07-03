import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Erwin Saputra
      </Link>
      <ul className={styles.links}>
        {["About", "Projects", "Hire Me"].map((item) => (
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
    </nav>
  );
}
