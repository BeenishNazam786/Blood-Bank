import React from 'react';
import iconBlood from './icon_blood_2.png';  // Adjust the relative path as necessary
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={iconBlood} alt="Blood Bank Logo" className="logo" />
                <h2 className="logo-text">Blood Bank</h2>
                {/* Text next to the logo */}

            </div>

            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/donors">Donor List</Link></li>
                    <li><Link to="/inventory">BloodStock</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;