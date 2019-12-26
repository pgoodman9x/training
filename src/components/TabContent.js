import React from 'react';

export default function TabContent(props){
    return(
        <div className="product-table">
            {
                props.children
            }
        </div>
    )
}