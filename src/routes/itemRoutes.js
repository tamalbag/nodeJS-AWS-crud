const express = require("express");
const router = express.Router();
const { createItem, getItems, getItemById, updateItem, deleteItem } = require("../controllers/itemController");
const authMiddleware = require("../middleware/auth.middleware"); // Middleware for JWT auth

// CRUD Routes (Protected)
router.post("/", authMiddleware, createItem);
router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, getItemById);
router.put("/:id", authMiddleware, updateItem);
router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;
