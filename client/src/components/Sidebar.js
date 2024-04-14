// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure you create this CSS file

const Sidebar = () => {
    return (
        <div className="sidebar bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
            <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</Link>
            <Link to="/support" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Support</Link>
            <Link to="/logout" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Logout</Link>
        </div>
    );
};

export default Sidebar;
