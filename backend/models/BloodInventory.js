// models/BloodInventory.js
const mongoose = require("mongoose");

const bloodStockSchema = new mongoose.Schema({
    bloodType: { type: String, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model("BloodStock", bloodStockSchema);
