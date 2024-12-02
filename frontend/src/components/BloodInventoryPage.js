import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BloodInventoryPage.css";

const BloodInventoryPage = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/blood/inventory");
                setInventory(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching blood inventory");
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    if (loading) {
        return <p>Loading blood inventory...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="inventory-page">
            {/* Slider message above the inventory */}
            <div className="slider-container">
                <div className="slider">
                    <p>Contact here if you need blood: 041-740-4633

                    </p>
                </div>
            </div>


            <div className="inventory-container">
                {inventory.map((item) => (
                    <div className="inventory-card" key={item._id}>
                        <h3>{item.bloodType}</h3>
                        <p>{item.quantity} units available</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BloodInventoryPage;
