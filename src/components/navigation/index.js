import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './style/style.sass'


class Navigation extends Component{
    render() {
        return (
            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink className='navigation_link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='navigation_link' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='navigation_link' to='/resume'>Resume</NavLink>
                    </li>
                    <li>
                        <NavLink className='navigation_link' to='/hobbies'>Hobbies</NavLink>
                    </li>
                    <li>
                        <NavLink className='navigation_link' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default Navigation;