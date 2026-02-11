import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}></div>
      <div className={styles.viewport}>
        <div className={styles.header}></div>
        <div></div>
      </div>
    </div>
  );
}
