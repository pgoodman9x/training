import React from 'react';
import Tab from './Tab';
export default class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: props.defaultActiveKey 
        }
    }

    setActiveTab = (eventKey) =>{
        this.setState({
            activeKey: eventKey
        })
    }

    render(){
        const {activeKey} = this.state;
    
        return(
            <div className="products-body">
                <ul className="products-tabList">
                    {
                        this.props.children.map(child => (
                            <Tab {...child.props} key={child.props.eventKey} activeKey={activeKey} setActiveTab={this.setActiveTab}/>
                        ))
                    }
                </ul>

                <div className="product-tabContent">
                    {
                        this.props.children.map(child => {
                            if (child.props.eventKey === activeKey){
                                return child.props.children
                            }else{
                                return undefined
                            }
                          
                        })
                    }
                </div>
            </div>

        )
    }
}