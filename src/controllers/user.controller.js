const User = require("../models/user.model");

exports.getAllUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    user ? res.json({ message: "User deleted" }) : res.status(404).json({ message: "User not found" });
};
