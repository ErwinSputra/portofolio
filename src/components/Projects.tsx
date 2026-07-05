import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
  image?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Remote Job Board",
    description:
      "A full-stack job board where employers post and manage listings with tiered subscriptions. Features Google OAuth, an employer dashboard, and saved jobs for candidates.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    links: {
      github: "https://github.com/ErwinSputra/remote-job-board",
      live: "https://remote-job-board-rouge.vercel.app",
    },
    image: "/images/remote-job-board.png",
    featured: true,
  },
  {
    title: "Coming Soon",
    description: "Next project in progress. Stay tuned.",
    technologies: [],
    links: {},
    featured: false,
  },
  {
    title: "Coming Soon 2",
    description: "Next project in progress. Stay tuned.",
    technologies: [],
    links: {},
    featured: false,
  },
];

export default function Projects() {
  return (
    <div id="projects" className={styles.wrapper}>
      <div className={styles.bgShapes} aria-hidden="true">
        <svg
          className={styles.shape1}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(16, 185, 129, 0.07)"
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
            fill="rgba(16, 185, 129, 0.05)"
            d="M39.9,-68.1C52.6,-61.8,64.4,-52.8,71.8,-40.8C79.2,-28.8,82.2,-14.4,81.4,-0.5C80.6,13.5,76,26.9,68.4,38.4C60.8,49.9,50.2,59.4,37.8,66.2C25.4,73,12.7,77,-0.9,78.4C-14.5,79.9,-29,78.8,-41.2,72.5C-53.4,66.2,-63.3,54.7,-70.2,41.5C-77.1,28.3,-81,14.1,-80.2,0.5C-79.4,-13.2,-73.9,-26.4,-66,-37.6C-58.1,-48.8,-47.8,-58,-36.1,-64.9C-24.4,-71.8,-12.2,-76.4,0.8,-77.7C13.8,-79,27.2,-74.4,39.9,-68.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <section className={styles.section}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : styles.placeholder}`}
            >
              {project.featured && (
                <>
                  {project.image && (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className={styles.image}
                      />
                    </div>
                  )}
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {project.description}
                  </p>
                  <div className={styles.tags}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        className={styles.linkLive}
                        target="_blank"
                      >
                        Live ↗
                      </Link>
                    )}
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        className={styles.linkGithub}
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </>
              )}

              {!project.featured && (
                <>
                  <h3 className={styles.placeholderTitle}>{project.title}</h3>
                  <p className={styles.placeholderText}>
                    {project.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
