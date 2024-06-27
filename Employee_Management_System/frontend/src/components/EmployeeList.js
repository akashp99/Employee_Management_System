import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8000/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/employees/${id}`);
            setEmployees(employees.filter(employee => employee._id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    return (
        <div className="employee-list-container">
            <h2>Employee List</h2>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Emp Name</th>
                        <th>ID</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>DOJ</th>
                        <th>City</th>
                        <th>Email ID</th>
                        <th>Mobile No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.EmpName}</td>
                            <td>{employee.ID}</td>
                            <td>{employee.Gender}</td>
                            <td>{employee.DOB}</td>
                            <td>{employee.DOJ}</td>
                            <td>{employee.City}</td>
                            <td>{employee.EmailID}</td>
                            <td>{employee.MobileNo}</td>
                            <td className="actions-container">
                                <button onClick={() => handleEdit(employee._id)} className="edit-button">Edit</button>
                            </td>
                            <td className="actions-container">
                                <button onClick={() => handleDelete(employee._id)} className="delete-button">Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
