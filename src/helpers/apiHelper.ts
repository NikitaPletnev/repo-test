import {ProductInterface} from "../interfaces/ProductInterface";

export const getProducts = (): Promise<any> => {
    return fetch('https://fakestoreapi.com/products');
}

export const addProduct = (payload: ProductInterface): Promise<any> => {
    return fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            payload
        )
    })
}
