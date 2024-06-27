import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Registration = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/users', {
                UserID: userID,
                Password: password
            });
            if (response.status === 201) {
                setMessage('Registration successful!');
                navigate('/');
            } else {
                setMessage('Registration failed.');
            }
        } catch (error) {
            setMessage('Registration failed. ' + error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
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
                    <button type="submit" className="auth-button">Register</button>
                    <Link to="/" className="auth-link">Login</Link>
                </div>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Registration;
