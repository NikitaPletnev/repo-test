import styles from "../styles/shopApp.module.css";
import Button from "./Button";
import * as React from "react";
import {ProductInterface} from "../interfaces/ProductInterface";
import ProductList from "./ProductList";
import Loader from "./Loader";

interface ContainerInterface {
    message: string;
    products: ProductInterface[]
    favoriteProducts: string[]
    loading: boolean;
    setOpen(open: boolean): void;

    setFavoriteProducts(favoriteProducts: string[]): void;
}

const Container = ({setOpen,loading, message, products, favoriteProducts, setFavoriteProducts}: ContainerInterface) => {
    const renderProductList = ():React.ReactNode => {
        if (!products?.length) {
            if(loading){
                return <Loader/>
            }
            return null;
        }

        return (
            <ProductList products={products}
                         favoriteProducts={favoriteProducts}
                         setFavoriteProducts={setFavoriteProducts}
            />
        )
    }

    return (
        <div className={['container', styles.main].join(' ')} style={{paddingTop: 0}}>
            <Button
                onClick={() => {
                    setOpen(true)
                }}
            >Send product proposal</Button>
            {!!message && <div className={styles.messageContainer}>
                <i>{message}</i>
            </div>}

            <div className={styles.statsContainer}>
                <span>Total products: {products.length}</span>
                {' - '}
                <span>Number of favorites: {favoriteProducts.length}</span>
            </div>
            {renderProductList()}
        </div>
    )
}

export default Container;
