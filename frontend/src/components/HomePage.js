import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/become-donor'); // Redirect to the donor form page
    };
    return (
        <div className="home">
            <h1>Donate Blood, Save Lives</h1>
            <p>Be a hero by saving someone's life today.</p>
            <button onClick={handleButtonClick} className="donor-button">
                Become a Donor
            </button>
        </div>
    );
};

export default HomePage;
