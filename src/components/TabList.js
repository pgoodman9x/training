import React from 'react';


export default class TabList extends React.Component{
    setActiveTab = (tabId) => {
        this.props.getActiveTab(tabId)
    }

    render(){
        const {activeTab, tabList} = this.props;
       
        let list = tabList.map(tab => {
            return <li className={`tab-item ${activeTab === tab.id ? 'active' : ''}`} key={tab.id}><button onClick={() => this.setActiveTab(tab.id)}>{tab.name}</button></li>
        }
        )

        return(
            <ul className="products-tabList">
                {
                    list
                }
            </ul>
        )
    }
}