import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgShapes} aria-hidden="true">
        <svg
          className={styles.shape1}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(16, 185, 129, 0.12)"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.8C64.8,54.4,53.8,65.1,40.6,72.4C27.4,79.7,13.7,83.5,-0.7,84.6C-15.1,85.7,-30.2,84,-43.4,77.2C-56.6,70.4,-67.9,58.4,-75.4,44.3C-82.9,30.2,-86.6,15.1,-85.5,0.6C-84.4,-13.8,-78.5,-27.6,-70.3,-39.7C-62.1,-51.8,-51.6,-62.1,-39.1,-69.9C-26.6,-77.7,-13.3,-83,-0.2,-82.7C12.9,-82.4,25.8,-76.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className={styles.shape2}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(16, 185, 129, 0.08)"
            d="M39.9,-68.1C52.6,-61.8,64.4,-52.8,71.8,-40.8C79.2,-28.8,82.2,-14.4,81.4,-0.5C80.6,13.5,76,26.9,68.4,38.4C60.8,49.9,50.2,59.4,37.8,66.2C25.4,73,12.7,77,-0.9,78.4C-14.5,79.9,-29,78.8,-41.2,72.5C-53.4,66.2,-63.3,54.7,-70.2,41.5C-77.1,28.3,-81,14.1,-80.2,0.5C-79.4,-13.2,-73.9,-26.4,-66,-37.6C-58.1,-48.8,-47.8,-58,-36.1,-64.9C-24.4,-71.8,-12.2,-76.4,0.8,-77.7C13.8,-79,27.2,-74.4,39.9,-68.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className={styles.shape3}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(16, 185, 129, 0.06)"
            d="M47.7,-79.1C62.3,-71.6,75.1,-60.7,81.2,-47C87.3,-33.3,86.7,-16.6,84.1,-1C81.5,14.7,76.9,29.3,69.4,42C61.9,54.7,51.5,65.4,38.9,72.4C26.3,79.4,13.1,82.7,-0.8,83.9C-14.7,85.1,-29.3,84.2,-42.1,77.8C-54.9,71.4,-65.8,59.5,-73.3,45.7C-80.8,31.9,-84.9,15.9,-83.8,0.6C-82.7,-14.7,-76.4,-29.4,-67.8,-42C-59.2,-54.6,-48.3,-65.1,-35.5,-72.6C-22.7,-80.1,-8,-84.6,3.8,-90.6C15.7,-96.6,33.1,-86.6,47.7,-79.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.heading}>I Build Websites &amp; Web Apps.</h1>
          <p className={styles.subtext}>
            Got an idea? Whether it&apos;s a portfolio, a landing page, or a
            full-stack platform — I&apos;ll turn it into something fast, clean,
            and ready to launch.
          </p>
          <Link href="#hire-me" className={styles.cta}>
            Let&apos;s Work Together
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.codeBlock}>
            <pre>
              <code>
                <span className={styles.comment}>
                  {"// available for work\n"}
                </span>
                <span className={styles.keyword}>{"const "}</span>
                <span>{"erwin = {\n"}</span>
                <span>{"  stack: ["}</span>
                <span className={styles.string}>{'"Next.js"'}</span>
                <span>{", "}</span>
                <span className={styles.string}>{'"Node.js"'}</span>
                <span>{", "}</span>
                <span className={styles.string}>{'"PostgreSQL"'}</span>
                <span>{"]\n"}</span>
                <span>{"  available: "}</span>
                <span className={styles.value}>{"true"}</span>
                <span>{"\n"}</span>
                <span>{"  message: "}</span>
                <span className={styles.string}>
                  {'"Let\'s build something."\n'}
                </span>
                <span>{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
