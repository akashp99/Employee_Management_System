const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { UserID, Password } = req.body;
    const user = new User({ UserID, Password });

    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.loginUser = async (req, res) => {
    const { UserID, Password } = req.body;
    try {
        const user = await User.findOne({ UserID, Password });
        if (user) {
            res.status(200).send({ message: 'Login successful', user });
        } else {
            res.status(400).send({ message: 'Invalid UserID or Password' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};