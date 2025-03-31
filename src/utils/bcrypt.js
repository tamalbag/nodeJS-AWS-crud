const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
