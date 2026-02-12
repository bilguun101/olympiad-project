import styles from "./page.module.css";
import { Logo } from "./_icons/logo.js";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.topSection}>
          <div className={styles.logoPlacement}>
            <div className={styles.logoText}>
              <div className={styles.logoContainer}>
                <Logo />
              </div>
              <p className={styles.name}> Олимпиад </p>{" "}
            </div>

            <div className={styles.title}> Багш </div>
          </div>
        </div>
      </div>
      <div className={styles.rightViewport}>
        <div className={styles.header}></div>
        <div></div>
      </div>
    </div>
  );
}
