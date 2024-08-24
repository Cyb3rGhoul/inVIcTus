import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Include your styles
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and X icons

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" style={{textDecoration:"none"}}><h1 className="logo">inVIcTus</h1></Link>
            <div className={`links ${isMobileMenuOpen ? 'mobile-active' : ''}`} id='links'>
                <Link to="/">Home</Link>
                <Link to="https://ffcs-vitb-maker.vercel.app/" target='blank'>FFCS Planner</Link>
                <Link to="/find-faculty">Find Your Faculty</Link>
                <Link to="https://github.com/Cyb3rGhoul/inVIcTus" target='blank'>Give a Star</Link>
                <a href="https://buymeacoffee.com/harshshukla.dev" target='_blank'>By Me a Coffee</a>
            </div>
            {/* Hamburger Icon for smaller screens */}
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navbar;
