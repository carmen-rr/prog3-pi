import React from 'react'
import {Link} from 'react-router-dom'
import './header.css';

function Header (){
    return (
    <header>
    <div className='cajaLogo'>
    <img src="imagenes/dmCompleto.PNG"  className="logo"/> 
    </div>
    <nav className="navegador">
    
        <img src="imagenes/DigitalMusic.PNG" className='logoTexto'/>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/favorites'>Favs</Link></li>
        </ul>

    </nav>

    </header>
       
    )
}

export default Header;