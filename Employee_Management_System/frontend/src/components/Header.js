// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <header>
            <h1>Employee Management System</h1>
            <nav>
                <Link to="/employee-create">Create Employee</Link>
                <Link to="/employee-list">Employee List</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;