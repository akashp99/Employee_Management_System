// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../App.css';

// const EmployeeEdit = () => {
//     const { id } = useParams();
//     const [employee, setEmployee] = useState({
//         EmpName: '',
//         ID: '',
//         Gender: '',
//         DOB: '',
//         DOJ: '',
//         City: '',
//         EmailID: '',
//         MobileNo: '',
//     });
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchEmployee = async () => {
//             try {
//                 console.log(`Fetching employee with ID: ${id}`);
//                 const response = await axios.get(`http://localhost:8000/employees/${id}`);
//                 console.log('Fetched employee data:', response.data);
//                 if (response.data) {
//                     setEmployee(response.data);
//                 } else {
//                     console.error('No data received for employee ID:', id);
//                 }
//             } catch (error) {
//                 console.error('Error fetching employee:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEmployee();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEmployee({
//             ...employee,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:8000/employees/${id}`, employee);
//             navigate('/employee-list');
//         } catch (error) {
//             console.error('Error updating employee:', error);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="auth-container">
//             <h2>Edit Employee</h2>
//             <form onSubmit={handleSubmit} className="auth-form">
//                 <div className="form-group">
//                     <label htmlFor="EmpName">Employee Name</label>
//                     <input
//                         type="text"
//                         id="EmpName"
//                         name="EmpName"
//                         value={employee.EmpName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="ID">ID</label>
//                     <input
//                         type="text"
//                         id="ID"
//                         name="ID"
//                         value={employee.ID}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Gender:</label>
//                     <div className="gender-options">
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="Gender"
//                                 value="Male"
//                                 checked={employee.Gender === 'Male'}
//                                 onChange={handleChange}
//                             />
//                             Male
//                         </label>
//                         <label>
//                             <input
//                                 type="radio"
//                                 name="Gender"
//                                 value="Female"
//                                 checked={employee.Gender === 'Female'}
//                                 onChange={handleChange}
//                             />
//                             Female
//                         </label>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="DOB">Date of Birth</label>
//                     <input
//                         type="date"
//                         id="DOB"
//                         name="DOB"
//                         value={employee.DOB}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="DOJ">Date of Joining</label>
//                     <input
//                         type="date"
//                         id="DOJ"
//                         name="DOJ"
//                         value={employee.DOJ}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>City:</label>
//                     <select
//                         name="City"
//                         value={employee.City}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select a city</option>
//                         <option value="Pune">Pune</option>
//                         <option value="Mumbai">Mumbai</option>
//                         <option value="Satna">Satna</option>
//                         <option value="Paithan">Paithan</option>
//                         <option value="Delhi">Delhi</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="EmailID">Email ID</label>
//                     <input
//                         type="email"
//                         id="EmailID"
//                         name="EmailID"
//                         value={employee.EmailID}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="MobileNo">Mobile Number</label>
//                     <input
//                         type="tel"
//                         id="MobileNo"
//                         name="MobileNo"
//                         value={employee.MobileNo}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-buttons">
//                     <button type="submit" className="auth-button">Update</button>
//                     <button type="button" className="auth-link" onClick={() => navigate('/employee-list')}>Cancel</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default EmployeeEdit;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const EmployeeEdit = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        EmpName: '',
        ID: '',
        Gender: '',
        DOB: '',
        DOJ: '',
        City: '',
        EmailID: '',
        MobileNo: '',
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                console.log(`Fetching employee with ID: ${id}`);
                const response = await axios.get(`http://localhost:8000/employees/${id}`);
                console.log('Fetched employee data:', response.data);
                if (response.data) {
                    const fetchedEmployee = response.data;
                    setEmployee({
                        ...fetchedEmployee,
                        DOB: fetchedEmployee.DOB ? fetchedEmployee.DOB.split('T')[0] : '',
                        DOJ: fetchedEmployee.DOJ ? fetchedEmployee.DOJ.split('T')[0] : ''
                    });
                } else {
                    console.error('No data received for employee ID:', id);
                }
            } catch (error) {
                console.error('Error fetching employee:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/employees/${id}`, employee);
            navigate('/employee-list');
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="auth-container">
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label htmlFor="EmpName">Employee Name</label>
                    <input
                        type="text"
                        id="EmpName"
                        name="EmpName"
                        value={employee.EmpName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ID">ID</label>
                    <input
                        type="text"
                        id="ID"
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
                    <label htmlFor="DOB">Date of Birth</label>
                    <input
                        type="date"
                        id="DOB"
                        name="DOB"
                        value={employee.DOB}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="DOJ">Date of Joining</label>
                    <input
                        type="date"
                        id="DOJ"
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
                    <label htmlFor="EmailID">Email ID</label>
                    <input
                        type="email"
                        id="EmailID"
                        name="EmailID"
                        value={employee.EmailID}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="MobileNo">Mobile Number</label>
                    <input
                        type="tel"
                        id="MobileNo"
                        name="MobileNo"
                        value={employee.MobileNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="auth-button">Update</button>
                    <button type="button" className="auth-link" onClick={() => navigate('/employee-list')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeEdit;
