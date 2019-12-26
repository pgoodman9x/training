import React from 'react';
import Tabs from './Tabs';
import TabContent from './TabContent';
export default function Products(){
    return(
        <div>
            <div className="products-header">
                <h2 className="header-ttl">Products</h2>
                <button>Add Product</button>
            </div>
            <Tabs>
                <TabContent id="1">
                    Yo yo yo
                </TabContent>
                <TabContent id="2">
               test
                </TabContent>
            </Tabs>
           
        </div>
    )
}