import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Updated hook

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login attempt with:', username, password);
        navigate('/dashboard'); // Updated method for navigation
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
