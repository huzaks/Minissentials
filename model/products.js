import {readFile} from 'fs/promises'
import { join } from 'path';

/**
 * @typedef Product
 * @type {object}
 * @property {string} slug
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {string} price
 * @property {string} material
 * @property {string} size
 * @property {string} weight
 * @property {string} image
 * @property {string} link
 * @property {string} height
 * @property {string} width
 */

/**
 * @type {Array<Product>}
 */
let products = null;

const loadProducts = async () => {
    let dataProducts = await readFile(join(process.cwd(), 'model/products.json'));
    products = JSON.parse(dataProducts);
}

export const getProducts = async () => {
    if(!products) {
        await loadProducts();
    }

    return products;
}

export const getProduct = async (slug) => {
    if(!products) {
        await loadProducts();
    }

    for(let product of products) {
        if(product.slug === slug) {
            return product;
        }
    }

    return null;
}

export const getCategory = async (category) => {
    if(!products) {
        await loadProducts();
    }

    for(let product of products) {
        if(product.category === category) {
            return product;
        }
    }

    return null;
}