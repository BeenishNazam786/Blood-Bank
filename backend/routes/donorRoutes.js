const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");
const BloodStock = require("../models/BloodInventory");

// Donor registration endpoint
router.post("/register", async (req, res) => {
    const { name, bloodType, age, email, phone, address } = req.body;

    // Validate input
    if (!name || !bloodType || !age || !email || !phone || !address) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if the donor already exists
        const existingDonor = await Donor.findOne({ email });
        if (existingDonor) {
            return res.status(400).json({ message: "Donor already registered with this email" });
        }

        // Create new donor
        const donor = new Donor({
            name,
            bloodType,
            age,
            email,
            phone,
            address,
        });

        await donor.save();
        res.status(201).json({ message: "Donor registered successfully", donor });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
// Route to get the list of all donors
router.get("/donors", async (req, res) => {
    try {
        const donors = await Donor.find(); // Fetch all donors from the database
        res.json(donors); // Return the donors in the response
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ message: "Server Error" });
    }
});
// Blood Stock Route
router.post("/addBloodStock", async (req, res) => {
    try {
        const { bloodType, quantity } = req.body;

        if (!bloodType || !quantity) {
            return res.status(400).json({ message: "Blood type and quantity are required" });
        }

        const bloodStock = new BloodStock({ bloodType, quantity });
        await bloodStock.save();

        res.status(201).json({ message: "Blood stock added successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding blood stock" });
    }
});

module.exports = router;
