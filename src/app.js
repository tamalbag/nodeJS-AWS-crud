const express = require("express");
const connectDB = require("./config/db");
require("./config/dotenv");
const itemRoutes = require("./routes/itemRoutes"); // Import item routes

connectDB();
const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/items", itemRoutes); // Register item routes

module.exports = app;
