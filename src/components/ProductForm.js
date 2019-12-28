import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: props.product,
            productList: props.productList,
     
            productName: (props.product) ? props.product.name : '',
            productPrice: (props.product) ? props.product.price : 0,
            productImgSrc: (props.product) ? props.product.image : '',
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.product !== this.props.product){
            this.setState({
                product: this.props.product,
                productName: this.props.product.name,
                productPrice: this.props.product.price,
                productImgSrc: this.props.product.image,
            })
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }

    submitForm = (e) => {
       e.preventDefault();
       const {productName, productPrice, productImgSrc} = this.state;
       let obj = {name: productName, price: productPrice, image: productImgSrc};
       this.props.onSubmit(obj);
    }
    render() {
        const {product, productName, productPrice, productImgSrc, productList} = this.state;
     
        return (
            <form onSubmit={this.submitForm} className="productForm">
                <ul>
                    <li>
                        <span className="form-ttl">Id</span> 
                        <span className="form-input">{product !== undefined ? product.id : productList.length+1}</span>
                    </li>
                    <li>
                        <span className="form-ttl">Name</span>
                        <span className="form-input">
                            <input type="text" name="productName" onChange={this.handleInputChange} value={productName}/>
                        </span>
                    </li>
                    <li>
                        <span className="form-ttl">Price</span>
                        <span className="form-input">
                            <input type="text" name="productPrice" onChange={this.handleInputChange} value={productPrice}/>
                        </span>
                    </li>
                    <li>
                        <span className="form-ttl">Image</span>
                        <span className="form-input">
                            <input type="text" name="productImgSrc" onChange={this.handleInputChange} value={productImgSrc}/>
                        </span>
                    </li>
                </ul>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ProductForm
