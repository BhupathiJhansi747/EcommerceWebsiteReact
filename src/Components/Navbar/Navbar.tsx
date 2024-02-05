import React, { useState } from 'react';
import './Navbar.css';
import Cart from '../Assets/Cart_logo.png';
import logo from '../Assets/logo.png'

import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const imgStyle = {
        // Add your styles here
        width: '90px',  // Example: Set the width to 50 pixels
        height: 'auto', // Maintain aspect ratio
        marginRight: '10px', // Example: Add some margin to the right
    };
    return (
        <>
            <div className='navbar '>
                <div className='nav_logo'>
                    <img src={logo} alt="" style={imgStyle}/>
                    <p>SHOPPER</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:"none"}} to='/'>Shop {menu==="shop"?<hr/>:<></>}</Link></li>
                    <li onClick={()=>{setMenu("Mens")}}> <Link style={{textDecoration:"none"}} to='/mens'>Men {menu==="Mens"?<hr/>:<></>}</Link></li>
                    <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women {menu==="Womens"?<hr/>:<></>}</Link></li>
                    <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}}  to='/kids'>Kids {menu==="Kids"?<hr/>:<></>}</Link></li>
                </ul>
                <div className='nav-login-cart'>
                   <Link to="/login"> <button>Login</button></Link> 
                   <Link to="/cart"> <img src={Cart} alt="" style={imgStyle} /></Link>
                    <div className="nav-cart-count">0</div>

                </div>

            </div>
        </>
    );
}

export default Navbar;