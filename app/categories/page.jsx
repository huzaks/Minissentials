import { getProducts } from "@/model/products";
import ProductList from "@/components/ProductList";
import styles from "@/app/categories/categories.module.css";

export const metadata = {
  title: "Categories - Minissentials",
  description: "Online shop for essentials",
  icons: { icon: "/logo.jpg" },
};

export default async function Categories() {
  let products = await getProducts();

  return (
    <>
      <div>
        <div className={styles.container}>
          <h1 className={styles.category}>All</h1>
          <div className={styles.products_grid}>
            {products.map((product) => (
              <ProductList key={product.slug} product={product}></ProductList>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
