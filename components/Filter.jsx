import Link from "next/link";
import styles from "@/components/Filter.module.css";

export default function Filter() {
  return (
    <>
      <div className={styles.container_list}>
        <ol className={styles.list}>
          <li className={styles.list_item}>
            <Link href={"/categories"} className={styles.link_list_item}>
              {" "}
              All
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link
              href={"/categories/outdoor"}
              className={styles.link_list_item}
            >
              {" "}
              Outdoor
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link
              href={"/categories/bedroom"}
              className={styles.link_list_item}
            >
              {" "}
              Bedroom
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href={"/categories/travel"} className={styles.link_list_item}>
              {" "}
              Travel
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href={"/categories/audioc"} className={styles.link_list_item}>
              {" "}
              Audio
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link
              href={"/categories/furniture"}
              className={styles.link_list_item}
            >
              {" "}
              Furniture
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href={"/categories/office"} className={styles.link_list_item}>
              {" "}
              Office
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}
