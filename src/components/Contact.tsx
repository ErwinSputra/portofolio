import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <section id="contact-me" className={styles.section}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.heading}>Let&apos;s build something great</h2>
          <p className={styles.subtext}>
            Have a project in mind or want to collaborate? Feel free to send me
            a message. I&apos;ll get back to you as soon as possible!
          </p>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <Mail size={18} />
              </span>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>erwinsputra757@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MapPin size={18} />
              </span>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoValue}>Indonesia (GMT+7)</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
