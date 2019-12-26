import React, { Component } from 'react';

class ProductsBodyTabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataActive: 1
        }
    }

    handleClick = (id) => {

        this.setState({
            dataActive: id
        })
    }
    render() {
        const {tabList, children} = this.props;
        const {dataActive} = this.state;


        let list = tabList.map(tab => {
            return(
                <li className={(dataActive === tab.id) ? 'active' : ''} data-id={tab.id}><button onClick={() => this.handleClick(tab.id)}>{tab.name}</button></li>)
        })
        return (
            <React.Fragment>
                <ul className="products-tabList">
                    {list}
                </ul>
                {

                  children
                  
                    
                }
            </React.Fragment>
        )
    }
}

export default ProductsBodyTabs
