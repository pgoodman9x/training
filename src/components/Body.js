import React from 'react'

export default function Body(props) {
    return (
        <div className="body">
            <div className="container">
                 {props.children}
             </div>
           
        </div>
    )
}
