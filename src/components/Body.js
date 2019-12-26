import React from 'react'

export default function Body(props) {
    return (
        <main>
            <div className="container">
                 {props.children}
             </div>
           
        </main>
    )
}
