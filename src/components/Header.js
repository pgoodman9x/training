import React from 'react';
import { Menu } from './AllComponents';

export default function Header() {
    const menuList = [
        {
                id: 1,
                name: 'Home',
                position : 0,
                path: ''
        },
        {
                id: 2,
                name: 'Task 1',
                position : 1,
                path: 'task1'
        },
        {
                id: 3,
                name: 'Task 2',
                position: 2,
                path: 'task2',
        },
       {
                id: 4,
                name: 'Task 3',
                position: 3,
                path: 'task3',
        },
    ]

    return (
        <header className="c-header">
           <Menu list={menuList}/>
        </header>
    )
}
