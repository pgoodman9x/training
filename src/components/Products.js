import React, {useState} from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import ProductList from './ProductList';
import {HelloWorld} from './AllComponents';

export default function Products(){
    const [bool, setBool] = useState(false);
    return(
        <React.Fragment>
            <div className="products-header">
                <h2 className="header-ttl">Products</h2>
                <button onClick={() => setBool(true)}>Add Product</button>
            </div>

            <Tabs defaultActiveKey="productlist">
                <Tab eventKey="productlist" name="Product List">
                    <ProductList parentRequest={bool}/>
                </Tab>
                <Tab eventKey="test" name="Test Tab">
                    <HelloWorld />
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}