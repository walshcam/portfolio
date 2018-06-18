//==================================================================================
// The Website's Navbar
//==================================================================================
import React from 'react';

const logoStyle = {
    width: '200px'
}

const Navbar = () => (
    <nav className="navbar background-purple text-white">
        <span className="navbar-brand mb-0"><img style = {logoStyle} src = "/images/CameronLogoDarkBackground.png" alt = "logo" /></span>
    </nav>
);

export default Navbar;