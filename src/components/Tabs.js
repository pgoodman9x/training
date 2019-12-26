import React from 'react';
import TabList from './TabList';
import TabContent from './TabContent';

export default class Tabs extends React.Component {
    constructor(){
        super();
        this.state = {
            activeTab: 1
        }
    }

    getActiveTab = (tabid) => {
        console.log(`tab id ne: ${tabid}`);
        this.setState({
            activeTab: tabid
        })
    }
    render(){
        const {activeTab} = this.state;
        const {children} = this.props;

        var tabList = [
            {
                id:1,
                name:"Catalog"
            },
            {
                id:2,
                name: "Test"
            }
        ]
        return(
            <div className="products-body">
                <TabList activeTab={activeTab} tabList={tabList} getActiveTab={this.getActiveTab}/>
                {
                      <TabContent>
                          {
children.map(child => (Number(child.props.id) === activeTab) ? child.props.children : undefined )
                          }
                    
                     </TabContent>
                }
            </div>
        )
    }
}