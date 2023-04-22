import styles from "../styles/Home.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.footer}></img>
      </a>
    </footer>
  )
}