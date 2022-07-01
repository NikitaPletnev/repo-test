import * as React from "react";
import Modal from "react-modal";
import {FaTimes} from "react-icons/fa";
import Form from "./Form";
import styles from "../styles/shopApp.module.css";
import {useEffect, useState} from "react";
import Header from "./Header";
import TopSection from "./TopSection";
import Container from "./Container";
import {ProductInterface} from "../interfaces/ProductInterface";
import {addProduct, getProducts} from "../helpers/apiHelper";

const ShopApp = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((response) => {
            response.json().then((resource: ProductInterface[]) => {
                setProducts(resource);
                setLoading(false);
            })
        })
    }, [])

    const onSubmit = (payload: ProductInterface) => {
        setMessage('Adding product...')
        setOpen(false);
        addProduct(payload)
            .then(res => res.json())
            .then(() => {
                    setTimeout(() => {
                        setProducts([payload, ...products]);
                        setMessage('');
                    }, 2000)
            })
    }

    return (
        <React.Fragment>
            <Header/>
            <TopSection/>
            <Container message={message}
                       products={products}
                       favoriteProducts={favoriteProducts}
                       setFavoriteProducts={setFavoriteProducts}
                       setOpen={setOpen}
                       loading={loading}
            />
            <Modal
                isOpen={open}
                className={styles.reactModalContent}
                overlayClassName={styles.reactModalOverlay}
            >
                <div className={styles.modalContentHelper}>
                    <div
                        className={styles.modalClose}
                        onClick={() => {
                            setOpen(false)
                        }}
                    ><FaTimes/></div>
                    <Form
                        onSubmit={onSubmit}
                    />
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default ShopApp;
