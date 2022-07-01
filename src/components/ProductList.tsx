import React from 'react';
import {ProductInterface} from "../interfaces/ProductInterface";
import styles from "../styles/ProductList.module.css";
import {FaStar} from "react-icons/fa";


interface ProductListInterface {
    products: ProductInterface[];
    favoriteProducts: string[];

    setFavoriteProducts(favoriteProduct: string[]): void;
}


const ProductList = ({products, favoriteProducts, setFavoriteProducts}: ProductListInterface) => {
    const {product: productClass, productBody, actionBarItem, actionBarItemLabel} = styles
    return (
        <ul>
            {products.map((product) => {
                return (
                    <li
                        key={product.title}
                        className={productClass}
                        style={{display: 'inline-block', overflowX: 'scroll', float: 'none', clear: 'both'}}>
                        <span className={styles['product-title']} style={{overflowX: 'hidden'}}>{product.title}</span>

                        <p>Rating: {product.rating ? `${product.rating.rate}/5` : ''}</p>

                        <p>Price: ${+product.price}</p>

                        <p className={productBody}>
                            Description:
                            <span>{product.description}</span>
                        </p>

        <button
            className={`${actionBarItem} ${
                favoriteProducts.includes(product.title) ? "active" : ''
            }`}
            onClick={() => {
                setFavoriteProducts(favoriteProducts.includes(product.title) ? favoriteProducts.filter((opt) => opt !== product.title) : [...favoriteProducts, product.title])
            }}
        >
          <FaStar/> <span
            className={actionBarItemLabel}>{favoriteProducts.includes(product.title) ? 'Remove from favorites' : 'Add to favorites'}</span>
        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductList;
