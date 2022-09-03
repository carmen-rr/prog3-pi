import React from 'react'
import {Link} from 'react-router-dom'

function Header (){
    return (
        <header>
            <nav>
                    <ul>
                    <li>
                        <Link to='/'>Home.</Link>
                    </li>

                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>

                    <li>
                    <Link to='/categories'>Categories</Link>
                    </li>

                    <li>
                    <Link to='/details'>Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
       
    )
} 

export default Header