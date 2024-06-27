const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    EmpName: { type: String, required: true },
    ID: { type: String, required: true },
    Gender: { type: String, required: true },
    DOB: { type: Date, required: true },
    DOJ: { type: Date, required: true },
    City: { type: String, required: true },
    EmailID: { type: String, required: true },
    MobileNo: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);