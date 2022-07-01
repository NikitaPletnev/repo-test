import ProductList from "../components/ProductList";
import renderer from 'react-test-renderer';
import React from "react";


it('snapshot test for ProductList element', () => {
    const testProducts = [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }

}]
    const tree = renderer
        .create(<ProductList favoriteProducts={[]} products={testProducts} setFavoriteProducts={() => {}}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
