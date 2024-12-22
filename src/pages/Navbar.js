import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "./images/durame1.png";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavToggle = () => {
        setShowNav(!showNav);
    };

    const handleLinkClick = () => {
        setShowNav(false);
    }

    return (
        <nav className="navbar navbar-fixed navbar-dark bg-black">
            <div className="container" style={{ paddingTop:'10px',
    paddingBottom: '10px'}}>
                <Link to="/" className="navbar-logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </Link>
                <button className="navbar-toggle" onClick={handleNavToggle}>
                    <span className="navbar-toggle-icon">{showNav ? '×' : '☰'}</span>
                </button>
                <ul className={`navbar-menu ${showNav ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/" Style={{':hover' :{borderColor:'brown'}}} className="navbar-link" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>About us</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Offer</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Contact</Link>
                    </li>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;