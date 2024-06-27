import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users/login', {
                UserID: userID,
                Password: password
            });
            if (response.status === 200) {
                setMessage('Login successful!');
                navigate('/employee-list');
            } else {
                setMessage('Login failed.');
            }
        } catch (error) {
            setMessage('Login failed. ' + error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label>UserID:</label>
                    <input
                        type="text"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="auth-button">Login</button>
                    <Link to="/register" className="auth-link">Register</Link>
                </div>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Login;