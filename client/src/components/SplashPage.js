// Import React and Link from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';
import './SplashPage.css';  // Ensure you have corresponding styles defined in this CSS file

const SplashPage = () => {
    return (
        <div className="splash-container">
            <div className="content">
                <h1 className="title">Welcome to Kit.io</h1>
                <p className="tagline">Detangling your Kit</p>
                <div className="buttons">
                    <Link to="/login" className="btn login">Log In</Link>
                    <Link to="/register" className="btn register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;
