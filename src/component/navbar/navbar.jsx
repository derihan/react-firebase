import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
        
                <div><Link  to="/">Home</Link></div>
                <div><Link to="/product">Product</Link></div>
                <div><Link to="/profil">Profil</Link></div>
                <div><Link to="/login">login</Link></div>
                <div className="cart"><i className="fa fa-shopping-cart"></i></div>
            
        </nav>
    )
}

export default Navbar

