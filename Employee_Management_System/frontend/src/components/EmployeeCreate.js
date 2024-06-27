import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EmployeeCreate = () => {
    const [employee, setEmployee] = useState({
        EmpName: '',
        ID: '',
        Gender: '',
        DOB: '',
        DOJ: '',
        City: '',
        EmailID: '',
        MobileNo: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/employees', employee);
            if (response.status === 201) {
                setMessage('Employee created successfully!');
                navigate('/employee-list');
            } else {
                setMessage('Employee creation failed.');
            }
        } catch (error) {
            setMessage('Employee creation failed. ' + error.message);
        }
    };

    return (
        <div className="create-employee-container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit} className="create-employee-form">
                <div className="form-group">
                    <label>EmpName:</label>
                    <input
                        type="text"
                        name="EmpName"
                        value={employee.EmpName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>ID:</label>
                    <input
                        type="text"
                        name="ID"
                        value={employee.ID}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="gender-options">
                        <label>
                            <input
                                type="radio"
                                name="Gender"
                                value="Male"
                                checked={employee.Gender === 'Male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="Gender"
                                value="Female"
                                checked={employee.Gender === 'Female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>DOB:</label>
                    <input
                        type="date"
                        name="DOB"
                        value={employee.DOB}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>DOJ:</label>
                    <input
                        type="date"
                        name="DOJ"
                        value={employee.DOJ}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <select
                        name="City"
                        value={employee.City}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a city</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Satna">Satna</option>
                        <option value="Paithan">Paithan</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>EmailID:</label>
                    <input
                        type="email"
                        name="EmailID"
                        value={employee.EmailID}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>MobileNo:</label>
                    <input
                        type="text"
                        name="MobileNo"
                        value={employee.MobileNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="create-employee-button">Create Employee</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default EmployeeCreate;
