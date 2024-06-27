const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserID: { type: String, required: true },
    Password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);