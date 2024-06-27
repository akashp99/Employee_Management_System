const Employee = require('../models/employee');

exports.createEmployee = async (req, res) => {
    const { EmpName, ID, Gender, DOB, DOJ, City, EmailID, MobileNo } = req.body;
    const employee = new Employee({ EmpName, ID, Gender, DOB, DOJ, City, EmailID, MobileNo });

    try {
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ message: 'Failed to create employee' });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ message: 'Failed to fetch employees' });
    }
};

exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error('Error fetching employee:', error);
        res.status(500).json({ message: 'Failed to fetch employee', error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { EmpName, Gender, DOB, DOJ, City, EmailID, MobileNo } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
            EmpName,
            Gender,
            DOB,
            DOJ,
            City,
            EmailID,
            MobileNo
        }, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ message: 'Failed to update employee', error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'Failed to delete employee', error: error.message });
    }
};