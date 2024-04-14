// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure you create this CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="logo text-xl font-bold text-white">Kit.io</Link>
                <div className="nav-links">
                    <Link to="/login" className="text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-300">Login</Link>
                    <Link to="/register" className="text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-300">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
