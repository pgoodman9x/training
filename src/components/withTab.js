import React from 'react';

const withTab = (WrappedComponent) => {
    class WithTab extends React.Component{
        render(){
            return <WrappedComponent {...this.props } />
        }
    }
    return WithTab;
}

export default withTab;