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
            bool: false,
    
        }
    }

    handleLinkClicked = (id) => {
        this.setState({ currentLink: id });
    }

    componentDidMount() {
        this.setState({width: this.menuRef.current.offsetWidth, offsetLeft: this.menuRef.current.offsetLeft});
    }

    componentDidUpdate(prevProps, prevState) {
      
        if(this.state.currentLink != prevState.currentLink){
            if(this.state.currentLink > prevState.currentLink){
                this.setState((state) => {
                    return {width: this.menuRef.current.offsetWidth + this.menuRef.current.offsetLeft - state.offsetLeft, offsetLeft: state.offsetLeft, bool: true}
                });
            }else{
                this.setState((state) => {
                    //console.log( this.menuRef.current.offsetWidth, this.menuRef.current.offsetLeft,  state.offsetLeft);
                    return {width:  state.offsetLeft - this.menuRef.current.offsetLeft, offsetLeft: this.menuRef.current.offsetLeft, bool: true}
                });
            }

        }

    }

    updateLineStyle = () =>{
        if(this.state.bool){
            this.setState(state => {
                return {width: this.menuRef.current.offsetWidth, offsetLeft:this.menuRef.current.offsetLeft, bool:false}
            })
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
                <div className="line" style={lineStyle} onTransitionEnd={() => this.updateLineStyle()}></div>
            </div>
        )
    }
}

export default Menu
