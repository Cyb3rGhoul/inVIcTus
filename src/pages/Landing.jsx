import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import backgroundVideo from '../assets/background.mp4';

const Landing = () => {
    return (

        <>

            <div className="landing">
                <header>
                    <h1 id='heading'>Welcome to <span className='in' id='in'>inVIcTus</span></h1>
                    <p>This is a one-stop destination for all your Needs.<br></br>(Academic needs)</p>
                </header>

                <section>
                    <h2 className="offer-heading">What You can do</h2>
                    <div className="timeline">
                        <Link to="https://ffcs-vitb-maker.vercel.app/" className="milestone" target="_blank">
                            <div className="circle">1</div>
                            <h3>FFCS Planner</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Link>
                        <Link to="/classroom" className="milestone">
                            <div className="circle">2</div>
                            <h3>Find Your Class</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Link>
                        <Link to="/faculty" className="milestone">
                            <div className="circle">3</div>
                            <h3>Find Your Faculty</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Link>
                        <Link to="/project" className="milestone">
                            <div className="circle">4</div>
                            <h3>Add Your Project</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Link>
                        <Link to="/contact" className="milestone">
                            <div className="circle">5</div>
                            <h3>Contact Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Link>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section about" style={{ textAlign: 'start' }}>
                            <h3>About Us</h3>
                            <p>
                                inVIcTUS is a comprehensive platform designed to cater to all your academic needs, from planning your curriculum to connecting with faculty.
                            </p>
                        </div>
                        <div className="footer-section social" id='social'>
                            <h3>Follow Me</h3>
                            <p style={{ marginBottom: 10 }}>Connect with me on social media</p>
                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 inVIcTus. All rights reserved by Harsh Shukla</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Landing;
