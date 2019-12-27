import React, { Component } from 'react'

class SortListButton extends Component {
    render() {
        const { onClickSort, orderBy } = this.props;
        return (
            <div className="sort-control">
                <button onClick={() => onClickSort(orderBy, "asc")} className="sort sort--up"></button>
                <button onClick={() => onClickSort(orderBy, "desc")}className="sort sort--down"></button>
            </div>
        )
    }
}

export default SortListButton
