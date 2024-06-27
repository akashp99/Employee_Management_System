import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit'; // Import EmployeeEdit
import Layout from './components/Layout';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route
                        path="/employee-create"
                        element={
                            <Layout>
                                <EmployeeCreate />
                            </Layout>
                        }
                    />
                    <Route
                        path="/employee-list"
                        element={
                            <Layout>
                                <EmployeeList />
                            </Layout>
                        }
                    />
                    <Route
                        path="/edit-employee/:id"
                        element={
                            <Layout>
                                <EmployeeEdit />
                            </Layout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;