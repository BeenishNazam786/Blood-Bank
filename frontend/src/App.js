import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DonorListPage from './components/DonorListPage';
import DonorFormPage from './components/DonorFormPage';
import About from './components/About';
import BloodInventoryPage from './components/BloodInventoryPage';
import leftImage from './components/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg';
import './App.css';
const App = () => {
  return (
    <Router>

      <Header />


      <Routes>

        <Route path="/" element={
          <div className="main-container">
            {/* Left Image (Only for Home Page) */}
            <div className="left-image-container">
              <img src={leftImage} alt="Blood Bank" className="left-image" />
            </div>

            {/* Right Content */}
            <div className="right-content">
              <HomePage />
            </div>
          </div>
        }
        />


        <Route path="/donors" element={<DonorListPage />} />
        <Route path="/become-donor" element={<DonorFormPage />} />
        <Route path="/inventory" element={<BloodInventoryPage />} />
        <Route path="/about" element={<About />} />

      </Routes>


      <Footer />
    </Router>
  );
};

export default App;
