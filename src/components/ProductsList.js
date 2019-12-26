import React, { Component } from 'react';
import {ProductsProvider} from './ProductsContext';
import ProductsHeader from './ProductsHeader';
import ProductsBody from './ProductsBody';
class ProductsList extends Component {
    render() {
        let products= [
            {
                    id: 1,
                    name: 'Product 1',
                    price: 0,
                    image: "image1.png"
            },
            {
                    id: 2,
                    name: 'Product 2',
                    price: 1,
                    image: "image2.png"
            },
            {
                    id: 3,
                    name: 'Product 3',
                    price: 2,
                    image: "image3.png"
            },
        ]

        return (
            <div className="products-wrapper">
                <ProductsProvider value={products}>
                    <ProductsHeader />
                    <ProductsBody />
                </ProductsProvider>
            </div>
        )
    }
}

export default ProductsList
