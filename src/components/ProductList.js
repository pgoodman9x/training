import React, { Component } from 'react';
import ProductForm from './ProductForm';
import SortListButton from './SortListButton';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                id: 1,
                name: 'Product 1',
                price: 500,
                image: "https://dummyimage.com/120x80/000/fff.png&text=Product"
            },
            {
                id: 2,
                name: 'Product 2',
                price: 100,
                image: "https://dummyimage.com/120x80/000/fff.png&text=Product"
            },
            {
                id: 3,
                name: 'Product 3',
                price: 1000,
                image: "https://dummyimage.com/120x80/000/fff.png&text=Product"
            }],
            showForm: false,
            selectedProduct: null,
            orderBy: 'id',
            orderDir: 'asc'
        }
    }

    componentDidUpdate(){
        if(this.props.parentRequest){
            if(!this.state.showForm){
                this.setState({
                    showForm: true
                })
            }
        }else{
            return;
        }
    }

    deleteItem = (id) => {
        let question = window.confirm("Are you sure that you want to delete it?");
        if (question) {
            let removedItemList = this.state.products.filter(product => product.id !== id);

            this.setState({
                products: removedItemList
            })
        } else {
            alert("The request is canceled!");
        }
    }

    showFormHandle = (productId) => {
            this.setState((state) => {
                return {
                    showForm: true,
                    selectedProduct: (productId) ? productId : null,
                }
            }
        )
    }

    handleSort = (orderBy, orderDir) => {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        })
    }

    handleChangeProduct = (product) => {
       const { products, selectedProduct } = this.state;
       const foundedProduct = products.find(product => product.id === selectedProduct);
       foundedProduct["name"] = product.name;
       foundedProduct["price"] = product.price;
       foundedProduct["image"] = product.image;
      
       this.setState({
           showForm:false,
           products: this.state.products,
           selectedProduct: null,
       })
    }

    render() {

        const { products, showForm, selectedProduct, orderBy, orderDir } = this.state;
        const rows = [];

        function orderProducts(productList, orderBy, orderDir) {
            switch (orderDir) {
                case "asc":
                    productList.sort((a, b) => {
                        if (typeof a[orderBy] === "number") {
                            return a[orderBy] - b[orderBy];
                        }
                        return a[orderBy].toString().localeCompare(b[orderBy].toString());
                    })
                    break;
                case "desc":
                    productList.sort((a, b) => {
                        if (typeof a[orderBy] === "number") {
                            return b[orderBy] - a[orderBy];
                        }
                        return b[orderBy].toString().localeCompare(a[orderBy].toString())

                    })
                    break;
                default:
                    break;
            }
        }

        orderProducts(products, orderBy, orderDir);

        products.forEach(product => {
            rows.push(
                <ProductRow key={product.id} product={product} deleteItem={this.deleteItem} showEditForm={this.showFormHandle} />
            )
        })


        //get the selected product for form
        let productToForm;
        if (selectedProduct !== null) {
            productToForm = products.find(product => product.id === selectedProduct)
        }

        return (
            <React.Fragment>
                {
                    showForm ? <ProductForm onSubmit={this.handleChangeProduct} product={selectedProduct !== null ? productToForm : undefined} productList={products}/> : undefined
                }
                {
                    (products.length > 0)
                        ?
                        <table className="productTable">
                            <thead>
                                <tr>
                                    <th>Id
                                        <SortListButton onClickSort={this.handleSort} orderBy="id" />
                                    </th>
                                    <th>Name
                                         <SortListButton onClickSort={this.handleSort} orderBy="name" />
                                    </th>
                                    <th>Price
                                        <SortListButton onClickSort={this.handleSort} orderBy="price" />
                                    </th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows}
                            </tbody>

                        </table>
                        : 'Nothing to show'
                }
            </React.Fragment>

        )
    }
}

const ProductRow = ({ product, deleteItem, showEditForm }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><img src={product.image} alt={product.name} /></td>
            <td><button className="mR5" onClick={() => showEditForm(product.id)}>Edit</button><button onClick={() => deleteItem(product.id)}>Delete</button></td>
        </tr>
    )
}


export default ProductList
