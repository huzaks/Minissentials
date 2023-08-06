import { getProduct, getProducts } from "@/model/products"
import Image from "next/image";
import Link from "next/link";
import styles from '@/app/products/[product]/page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import logo from "@/public/logo.jpg"
// /**
//  * @returns {import("next").Metadata}
//  */
// export async function generateMetadata({ params }) {
//     let product = await getProduct(params.product);

//     return {
//         title: `${product.name} - Minissentials`,
//         description: product.description,
//         icons: { icon: "/logo.jpg"}
//     }
// }

export const metadata = {
	title: `Minissentials`,
	description: 'Online shop for essentials',
	icons: { icon: "/logo.jpg"},
  }

export async function generateStaticParams() {
    let products = await getProducts();
    return products.map((product) => ({ product: product.slug }));
}

export default async function Product({ params }) {
    let product = await getProduct(params.product);

    return product && <div className={styles.product}>
        <div className={styles.container_product}>
        <h2 className={styles.name}>{product.name}</h2>
        <div className={styles.item}>
            <div>
                <Image src={product.image} height={product.height} width={product.width} alt={product.name}></Image>
            </div>
            <div className={styles.description}>
                
                <div style={{
                    fontSize: 1.1 + "rem"
                }}>
                    {product.description}
                </div>
                <p className={styles.price}>{product.price}</p>
                <Link href={product.link} target="_blank" rel="noreferrer noopener" className={styles.link}>BUY NOW
                
                </Link>
            </div>
        </div>
        </div>
        <div className={styles.container_details}>
            <div className={styles.details}>
                <p className={styles.details_title}>Material :</p>
                <div>{product.material}</div>
            </div>
            <div className={styles.details}>
                <p className={styles.details_title}>Weight :</p>
                <div>{product.weight}</div>
            </div>
            <div className={styles.details}>
                <p className={styles.details_title}>Size :</p>
                <div>{product.size}</div>
            </div>
        </div>
        
    </div>
} 