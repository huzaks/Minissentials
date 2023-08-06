import styles from "@/components/Featured.module.css";
import Link from "next/link";

export default function Featured() {
  return (
    <>
      <div className={styles.featured_container}>
        <div className={styles.featured_grid_container}>
          <Link href={"/categories/outdoor"} className={styles.article_grid}>
            <div className={styles.gray_background}></div>
            <div className={styles.titles}>Outdoor</div>
          </Link>
          <Link href={"/categories/travel"} className={styles.article_grid}>
            <div className={styles.gray_background}></div>
            <div className={styles.titles}>Travel</div>
          </Link>
          <Link href={"/categories/audioc"} className={styles.article_grid}>
            <div className={styles.gray_background}></div>
            <div className={styles.titles}>Audio</div>
          </Link>
          <Link href={"/categories/bedroom"} className={styles.article_grid}>
            <div className={styles.gray_background}></div>
            <div className={styles.titles}>Bedroom</div>
          </Link>
        </div>
      </div>
    </>
  );
}
