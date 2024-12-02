// routes/bloodRoutes.js
const express = require("express");
const BloodInventory = require("../models/BloodInventory");

const router = express.Router();

// Endpoint to fetch blood inventory
router.get("/inventory", async (req, res) => {
    try {
        const inventory = await BloodInventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blood inventory" });
    }
});

module.exports = router;
