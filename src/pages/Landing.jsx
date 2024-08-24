import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/Footer';

const Landing = () => {
    return (

        <>
            <div className="landing">
                <header>
                    <h1 id='heading'>Welcome to <span className='in' id='in'>
                        <TypeAnimation
                            sequence={[
                                'inVIcTus',
                                1000,
                            ]}
                            wrapper="span"
                            speed={{type: 'keyStrokeDelayInMs', value: 250}}
                            style={{ fontSize: '1em', display: 'inline-block' }}
                            repeat={Infinity}
                        /></span></h1>
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
                        <Link to="/find-faculty" className="milestone">
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
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default Landing;
