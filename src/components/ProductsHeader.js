import React, { Component } from 'react'

class ProductsHeader extends Component {

    addProduct = () =>{
        alert("1");
    }
    
    render() {
        return (
            <div className="products-header">
                <span className="header-ttl">Product list</span>
                <button className="addBtn" onClick={this.addProduct}>Add Product</button>
            </div>
        )
    }
}

export default ProductsHeader
