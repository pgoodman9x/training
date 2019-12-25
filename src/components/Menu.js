import React, { Component } from 'react';
import { MenuChild } from './AllComponents';

export class Menu extends Component {
    constructor() {
        super();
        this.menuRef = React.createRef();
        this.state = {
            currentLink: 0,
    
            width: null,
            offsetLeft: null,
    
        }
    }

    handleLinkClicked = (id, ref) => {
        this.setState({ currentLink: id });
        console.log(ref);
    }

    componentDidMount() {
        this.setState({width: this.menuRef.current.offsetWidth, offsetLeft: this.menuRef.current.offsetLeft});
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.currentLink != prevState.currentLink){
            this.setState({width: this.menuRef.current.width, offsetLeft: this.menuRef.current.offsetLeft});
        }
    }
    render() {
        let navNames = [
            { name: "Home", path: '' }, 
            { name: "Task 1", path: 'task1' }, 
            { name: "Task 2", path: 'task2' }, 
            { name: "Task 3", path: 'task3' }
        ];

        const { currentLink, width, offsetLeft } = this.state;
        const lineStyle = {
            width: width+'px',
            marginLeft: offsetLeft+'px'
        }
        return (
            <div className='nav-wrapper'>
                    <ul className="c-nav">
                        {
                            navNames.map((e, index) => {
                                return <MenuChild current={index===currentLink ? index : undefined} 
                                                    ref={index===currentLink ? this.menuRef : undefined} 
                                                    key={index} id={index} name={e.name} 
                                                    onClick={this.handleLinkClicked} 
                                                    src={e.path}/>
                            })
                        }
                    </ul>
                <div className="line" style={lineStyle}></div>
            </div>
        )
    }
}

export default Menu
