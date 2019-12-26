import React, { Component } from 'react'

class ProductsTabContent extends Component {
    render() {
        return (
            <div className="product-table">
                {this.props.children}
            </div>
        )
    }
}

export default ProductsTabContent
