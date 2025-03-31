const authService = require("../services/auth.service");

exports.register = async (req, res) => {
    try {
        const token = await authService.registerUser(req.body.name, req.body.email, req.body.password);
        res.status(201).json({ "message": "User registered successfully", token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body.email, req.body.password);
        res.json({"message": "Login successfully", token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
