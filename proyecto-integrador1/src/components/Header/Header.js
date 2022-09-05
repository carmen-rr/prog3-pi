import React from 'react'
import {Link} from 'react-router-dom'
import './header.css';

function Header (){
    return (
        <header>
            <nav className='main-nav'>
                    <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                    <Link to='/categories'>Categories</Link>
                    </li>

                    <li>
                    <Link to='/details'>Details</Link>
                    </li>
                    
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>

                <ul class="user">
            <li>Nombre usuario <img src="./imagenes/user.jpg" alt=""/></li>
                </ul>
            </nav>
        </header>
       
    )
} 

export default Header