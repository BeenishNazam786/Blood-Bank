import React, { useState } from 'react';
import axios from 'axios';
import './DonorFormPage.css';

const DonorFormPage = () => {
    const [donorData, setDonorData] = useState({
        name: "",
        bloodType: "",
        age: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonorData({ ...donorData, [name]: value });
    };

    const registerDonor = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/donors/register",
                donorData
            );
            console.log(response.data);

            setErrorMessage("");
            setSuccessMessage("Donor registered successfully!");
            setDonorData({ name: "", bloodType: "", age: "", email: "", phone: "", address: "" });
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        }
    };

    return (
        <div>
            <h2>Donor Registration</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={donorData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                    />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <select
                        name="bloodType"
                        value={donorData.bloodType}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Blood Type</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={donorData.age}
                        onChange={handleInputChange}
                        placeholder="Age"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={donorData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={donorData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={donorData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                    />
                </div>
                <button type="button" onClick={registerDonor}>Register</button>
            </form>

            {/* Display error message */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            {/* Display success message */}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );
};

export default DonorFormPage;