import React, { Component } from 'react';
import { MenuChild } from './AllComponents';

export class Menu extends Component {
    constructor() {
        super();
        this.menuRef = React.createRef();
        this.state = {
            currentLink: 0,
            
            //line style variable
            width: null,
            offsetLeft: null,
            bool: false,
        }
    }

    handleLinkClicked = (id) => {
        this.setState({ currentLink: id });
        localStorage.setItem('currentPos', id);
    }

    componentDidMount() {
        //If there had local variable of current pos, then set it
        let currentPosCache = Number(localStorage.getItem('currentPos'));
        this.setState({
            currentLink: (currentPosCache !== undefined ? currentPosCache : 0 ), 
            width: this.menuRef.current.offsetWidth, 
            offsetLeft: this.menuRef.current.offsetLeft
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const {offsetWidth, offsetLeft} = this.menuRef.current;
        //lineWidth condition
         if(this.state.currentLink !== prevState.currentLink){
            if(this.state.currentLink > prevState.currentLink){
                this.setState((state) => {
                    return {width: offsetWidth + offsetLeft - state.offsetLeft, offsetLeft: state.offsetLeft, bool: true}
                });
            }else{
                this.setState((state) => {
                    return {width:  state.offsetLeft + state.width  - offsetLeft, offsetLeft: offsetLeft, bool: true}
                });
            }
        }
    }

    updateLineStyle = () =>{
        //update line after transitionend
        const {offsetWidth, offsetLeft} = this.menuRef.current;
        if(this.state.bool){
            this.setState(state => {
                return {width: offsetWidth, offsetLeft:offsetLeft, bool:false}
            })
        }
    }
    render() {
        const {list} = this.props;
        const { currentLink, width, offsetLeft } = this.state;

        const lineStyle = {
            width: width+'px',
            marginLeft: offsetLeft+'px'
        }

        return (
            <div className='nav-wrapper'>
                    <ul className="c-nav">
                        {
                            list.map((navItem) => {
    
                                return <MenuChild current={navItem.position===currentLink ? navItem.position : undefined} 
                                                    ref={navItem.position===currentLink ? this.menuRef : undefined} 
                                                    key={navItem.id} position={navItem.position} name={navItem.name} 
                                                    onClick={this.handleLinkClicked} 
                                                    src={navItem.path}/>
                            })
                        }
                    </ul>
                <div className="line" style={lineStyle} onTransitionEnd={() => this.updateLineStyle()}></div>
            </div>
        )
    }
}

export default Menu
