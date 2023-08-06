import { getProducts } from "@/model/products";
import ProductList from "@/components/ProductList";
import styles from "@/app/categories/categories.module.css";

export const metadata = {
  title: "Furniture - Minissentials",
  description: "Online shop for essentials",
  icons: { icon: "/logo.jpg" },
};

export default async function Furniture() {
  let products = await getProducts();

  const filtered = products.filter((p) => p.category === "furniture");
  return (
    <>
      <div>
        <div className={styles.container}>
          <h1 className={styles.category}>Furniture</h1>
          <div className={styles.products_grid}>
            {filtered.map((product) => (
              <ProductList key={product.slug} product={product}></ProductList>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
