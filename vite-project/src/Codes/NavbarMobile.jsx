
import React, { useState } from 'react';
import '../Navbar.css'

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        
        
        <nav className="navbar">
            <div className="col-md-1 col-sm-1 col-lg-2">      
      <a href="http://localhost:5173/home"><div className='Logo dis' /></a>
      </div>

      <div className="col-md-4 col-sm-4 col-lg-5">
        
      <input className='input_navbar' type="search" placeholder='search_item'/><button className='search_button'><img className='search_icon' src="https://th.bing.com/th/id/R.445f2174d9b978e9cb0e91bf192bb937?rik=L%2fhyk4tZUbzcVg&pid=ImgRaw&r=0" alt="" /></button>
        
      </div>
      
            <div className="navbar-container">
                <button className="menu-toggle-button" onClick={toggleMenu}>
                    <span className="menu-icon">&#9776;</span> 
                </button>

                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div>
                    <div className="">
         <a href="http://localhost:5173/home"> <h5 className='dis3'>Home</h5></a>
   
          
      </div>
      <div className="">
        <h5><a href="http://localhost:5173/sell">Sell</a></h5>
      </div>
  
      
      <div className="">

        <a href="http://localhost:5173/profile"><i class="fa-solid fa-user userIcon"></i></a>
        

      </div>
      <div>
        <a href="top">
        <i class="fa-solid fa-cart-shopping cartIcon"></i>
        </a>
      </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarMobile