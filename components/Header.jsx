"use client";
import styles from "@/components/Header.module.css";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [state, setState] = useState(false);
  useEffect(() => {
    const changeHeaderSizeScroll = () => {
      const scrollValue = document.documentElement.scrollTop;

      if (scrollValue > 100) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", changeHeaderSizeScroll);
  });

  return (
    <header
      className={
        state ? styles.navbar_containerscroll : styles.navbar_container
      }
    >
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="https://www.google.com/search?rlz=1C1CHBF_enCA894CA894&sxsrf=AB5stBh8QU4U1vuWtSmEu_Kv8WA1t2Z6BA:1690734220877&q=shop+logo&tbm=isch&source=lnms&sa=X&ved=2ahUKEwisy5Pl67aAAxU4rokEHQIBCBgQ0pQJegQIFBAB&biw=1920&bih=963&dpr=1#imgrc=034JZeSZgqi9KM"
              width={100}
              height={100}
              className={styles.logo}
            />
          </Link>
          <Link href={"/categories"} className={styles.links}>
            Categories
          </Link>
          <div></div>
        </nav>
      </div>
    </header>
  );
}
