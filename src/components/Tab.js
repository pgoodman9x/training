import React from 'react';
import withTab from './withTab';

function Tab(props) {
    return (
        <li className={props.activeKey === props.eventKey ? 'active' : undefined} key={props.eventKey}>
            <button onClick={() => props.setActiveTab(props.eventKey)}>{props.name}</button>
        </li>
    )
}

export default withTab(Tab);

