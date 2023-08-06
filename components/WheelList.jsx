"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Wheel.module.css";

export default function ProductList({ product }) {
  return (
    <Link
      className={styles.link}
      href={`/products/${product.slug}`}
      key={product.slug}
    >
      <section className={styles.section_img}>
        <Image
          as={"image"}
          className={styles.img}
          src={product.image}
          alt={product.name}
          height={product.height}
          width={product.width}
        ></Image>
      </section>
      <section className={styles.section_details}>
        <div>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
      </section>
    </Link>
  );
}
