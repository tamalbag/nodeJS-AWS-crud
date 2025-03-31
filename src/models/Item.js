const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Store the user who created the item
});

module.exports = mongoose.model("Item", ItemSchema);
