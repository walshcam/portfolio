//==================================================================================
// The Website's Navbar
//==================================================================================
import React from 'react';
import Logo from './../../assets/images/CameronLogoDarkBackground.png';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark background-purple text-white">
        {/* Logo */}
        <span className="navbar-brand mb-0">
            <div style = {{ width: '200px', height: "20px", backgroundSize: "cover", backgroundImage: `url(${Logo})`}}></div>
        </span>

        {/* Button When Collapsed */}
        <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarInfo" aria-controls = "navbarInfo" aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"></span>
        </button>

        {/* Navbar Options */}
        <div className = "collapse navbar-collapse" id = "navbarInfo">
            <div className = "navbar-nav">
                <a className = "nav-item nav-link" href = "/">Home</a>
                <a className = "nav-item nav-link" href = "/AboutMe">About Me</a>
            </div>
        </div>
    </nav>
);

export default Navbar;