const User = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const generateToken = require("../utils/jwt");

exports.registerUser = async (name, email, password) => {
    if (await User.findOne({ email })) throw new Error("User already exists");
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword });
    return generateToken(user._id);
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
        throw new Error("Invalid credentials");
    }
    return generateToken(user._id);
};
