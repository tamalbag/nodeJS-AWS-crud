const express = require("express");
const { getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/user.controller");
const protect = require("../middleware/auth.middleware");

const router = express.Router();
router.get("/", protect, getAllUsers);
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
