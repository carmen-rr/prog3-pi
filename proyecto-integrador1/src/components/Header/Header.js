import React from 'react'
import {Link} from 'react-router-dom'
import './header.css';

function Header (){
    return (
    <header>
        
    <section className="logo">
        <div className="imagenes-logo">
            <img src="imagenes/anytime-slogan.PNG" alt="Music Anytime" className="slogan"/>
            <img src="imagenes/logo3.PNG" alt="Logo Planet Music"/>
            <img src="imagenes/anywhere-slogan.PNG" alt="Music Anywhere" className="slogan"/>
        </div>
        <div className="alerta">
            <p className="probando1">The field can't be empty</p>
            <p className="probando2">You should enter at least three characters</p>
        </div>  
    </section>
    <nav className="navegador">
        <img src="imagenes/logo3.PNG" alt="Logo Planet Music"/> 
        <form action="search-results.html" method="GET" className="search">
            <input type="text" name="search" value="" placeholder="Search..."/>
            <button type="submit"><i className="fa fa-search"></i></button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <ul className="Navegador">

        <li> <Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
        <li><Link to='/details'>Details</Link></li>    
        <li><Link to='/favorites'>Favorites</Link></li>
        <li className='usuario'>Usuario </li>
        
        </ul>


        
    </nav>



    </header>
       
    )
}

export default Header;