import React from "react";
import "./About.css";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>Blood Donor Connect</strong>, a platform dedicated to saving lives by bridging the gap between blood donors and recipients. Our mission is to create an accessible and efficient system for blood donation, ensuring that every individual in need has access to life-saving blood resources.
            </p>
            <h2>Our Mission</h2>
            <p>To enhance the well being of patients in our service area by assuring a reliable and economical supply of the safest possible blood, by providing innovative hemotherapy services, and by promoting research and education programs in transfusion medicine.</p>
            <h2>Our Vision</h2>
            <p>
                We envision a world where no one has to wait for life-saving blood. Our platform empowers communities, encourages regular donations, and builds a network of lifesavers.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>
                    <strong>Ease of Use:</strong> Our platform simplifies the process of donor registration and recipient requests.
                </li>
                <li>
                    <strong>Transparency:</strong> We ensure transparency and accountability in every interaction.
                </li>
                <li>
                    <strong>Community Building:</strong> Join a community of heroes making a difference every day.
                </li>
            </ul>
            <p>
                Together, we can create a world where every drop of blood saves lives. Thank you for being part of this noble cause!
            </p>
        </div>
    );
};

export default AboutUs;
