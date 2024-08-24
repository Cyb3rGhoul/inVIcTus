import React from 'react'
import './Footer.css'

const Footer = () => {
    return (<>
        <div className="footer-content">
            <div className="footer-section about" style={{ textAlign: 'start' }}>
                <h3>About Us</h3>
                <p>
                    inVIcTus is a comprehensive platform designed to cater to all your academic needs, from planning your curriculum to connecting with faculty.
                </p>
            </div>
            <div className="footer-section social" id='social'>
                <h3>Follow Me</h3>
                <p style={{ marginBottom: 10 }}>Connect with me on social media</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/harsh-shukla-1inkdein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Cyb3rGhoul" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://instagram.com/haarrrssshhh_" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 inVIcTus. All rights reserved by Harsh Shukla</p>
        </div>
    </>)
}

export default Footer;