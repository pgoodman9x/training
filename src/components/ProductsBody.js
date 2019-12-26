import React, { Component } from 'react'
import ProductsBodyTabs from './ProductsBodyTabs';
import ProductsTabContent from './ProductsTabContent';

class ProductsBody extends Component {
    render() {
        let tabbedList = [
            {
                id:1,
                name: "Catalog"
            },
            {
                id:2,
                name: "Test"
            }
        ]
        
        return (
            <div className="products-body">
                <ProductsBodyTabs tabList={tabbedList}>
                    <ProductsTabContent dataIndex="1">
                        Text
                    </ProductsTabContent>
                </ProductsBodyTabs>

            </div>
        )
    }
}

export default ProductsBody
