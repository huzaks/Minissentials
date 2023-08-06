import styles from "@/components/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        width: 100 + "%",
        paddingTop: 10 + "rem",
      }}
    >
      <div className={styles.newsletter_container}>
        <div className={styles.newsletter}>
          <div className={styles.newstitle}>Newsletter</div>
          <form className={styles.newsinputs}>
            <input type="email" placeholder="your@email.com" />
            <input type="submit" value={"Subscribe"} />
          </form>
        </div>
      </div>
      <div className={styles.links_container}>
        <div className={styles.links}>
          <div
            style={{
              display: "flex",
              listStyleType: "none",
              padding: 0,
              margin: 0,
              flexDirection: "row",
              gap: 1.2 + "rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Store Location</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>News</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
          <div>
            Design By{" "}
            <Link
              href={"https://github.com/Abderraouf-Rahmani"}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.git}
            >
              Abderraouf
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
