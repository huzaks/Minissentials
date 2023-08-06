import styles from "@/components/Decorate.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Decorate() {
  return (
    <>
      <div className={styles.container2}>
        <div className={styles.grid_container2}>
          <article className={styles.article_grid2}></article>
          <article className={styles.article_grid2}>
            <div className={styles.content}>
              <h1 className={styles.h1}>Decorate Passionately</h1>
              <p className={styles.text}>
                With Minissentials, decorate your house with beautifully
                handmade furniture.
              </p>
              <Link className={styles.link} href="/categories/furniture">
                SHOP NOW
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={styles.icon}
                />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
