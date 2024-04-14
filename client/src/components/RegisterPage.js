import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Use the new navigation hook

    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Register attempt with:', username, password);
        // Navigate to login page after registration
        navigate('/login');  // Updated method for navigation
    };

    return (
        <form onSubmit={handleRegister}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
