import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

 const MenuChild = React.forwardRef(({name, current, onClick, id, src}, ref) => {
        let className = "c-nav-item " + ((current === id) ? 'c-nav-item--active' : '')
        return (
            <Fragment>
                <li className={className} ref={ref}>
                    <Link to={`/${src}`} onClick={() => onClick(id)}>{name}</Link>
                </li>
            </Fragment>
        )
    }
)
 


export default MenuChild


