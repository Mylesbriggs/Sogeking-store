import React, { useState } from 'react';
import '../Navbar.css'


function ProfileMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        
        
        <nav className="navbar">
           <div className="navbar-container">
                <button className="menu-toggle-button" onClick={toggleMenu}>
                <i class="fa-solid fa-caret-right"></i>
                </button>

                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="col-lg-2 col-md-3 col-sm-3 userslide ">
        <h5><a href="http://localhost:5173/profile">ITEMS</a></h5>
           <div className="top2"></div>
          <h5><a href="http://localhost:5173/balance">BALANCE</a><i class="fa-solid fa-coins"></i></h5>
          <div className="top2"></div>
          <h5><a href="">SELL </a></h5>
          <div className="top2"></div>
          <h5><a href="http://localhost:5173/paidpromotion">PAID PROMOTION</a> <i class="fa-solid fa-rectangle-ad"></i></h5>
          <div className="top2"></div>
          <h5><a href="">REPORT A PROBLEM</a> <i class="fa-solid fa-bug"></i></h5>
          <div className="top2"></div>
          <h5><a href="">EDIT ITEMS</a><i class="fa-solid fa-pen-to-square"></i></h5>
          <div className="top2"></div>
          <h5><a href="">CONTACT US</a></h5>
          <div className="top2"></div>
          <h5><a href="">LOG OUT</a></h5>
        </div>
                </div>
                </div>
        </nav>
    );
}

export default ProfileMobile;