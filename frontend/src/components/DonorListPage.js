import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonorListPage.css';  // Import the external CSS file

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/donors");
                setDonors(response.data);  // Set the fetched donors data
                setLoading(false);  // Stop the loading state
            } catch (error) {
                setError("Error fetching donor list");
                setLoading(false);
            }
        };

        fetchDonors();
    }, []);

    if (loading) {
        return <p>Loading donors...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="donor-list-container">
            <h2>Donor List</h2>
            <div className="donor-cards">
                {donors.map((donor) => (
                    <div key={donor._id} className="donor-card">
                        <h3>{donor.name}</h3>
                        <p><strong>Blood Type:</strong> {donor.bloodType}</p>
                        <p><strong>Age:</strong> {donor.age}</p>
                        <p><strong>Email:</strong> {donor.email}</p>
                        <p><strong>Phone:</strong> {donor.phone}</p>
                        <p><strong>Address:</strong> {donor.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonorList;
