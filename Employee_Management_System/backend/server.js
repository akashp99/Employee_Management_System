const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to mongoDB"));

// Routes
const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employees');

app.use('/users', userRoutes);
app.use('/employees', employeeRoutes);

// Serve frontend files
app.use(express.static('public')); // Adjust if your frontend is in a different folder

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Express API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});