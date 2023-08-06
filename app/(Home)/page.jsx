import Image from 'next/image'
import styles from './page.module.css'
import { getProducts } from "@/model/products"
import ProductList from '@/components/ProductList'


export default async function Home() {

	let products = await getProducts();

	//Show 8 first products
	products.length = 8

	
  return (
<>
	<div className={styles.container}>
		<h1 className={styles.h1}>Our Beloved Products </h1>
		
			<div className={styles.products_grid}>
			{products.map((product => <ProductList key={product.slug} product={product}></ProductList>))}

			</div>
		
	</div>

	</>
  )
}
