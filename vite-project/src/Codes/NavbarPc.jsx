import React from 'react'
import '../Navbar.css'

function NavbarPc() {
  return (
    <div className='Nav_bar'>
       <div className="container">
       <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-2">      
      <a href="http://localhost:5173/home"><div className='Logo dis' /></a>
      </div>

      <div className="col-md-4 col-sm-4 col-lg-5">
        
       <input className='input_navbar' type="search" placeholder='search_item'/> <button className='search_button'><img className='search_icon' src="https://th.bing.com/th/id/R.445f2174d9b978e9cb0e91bf192bb937?rik=L%2fhyk4tZUbzcVg&pid=ImgRaw&r=0" alt="" /></button>
      </div>


      <div className="col-md-2 col-sm-2 col-lg-1">
         <a href="http://localhost:5173/home"> <h5 className='dis3'>Home</h5></a>
   
          
      </div>
      <div className="col-md-2 col-sm-2 col-lg-1">
        <h5><a href="http://localhost:5173/sell">Sell</a></h5>
      </div>
  
      
      <div className="col-md-3 col-sm-3 col-lg-2 ">

        <a href="http://localhost:5173/profile"><i class="fa-solid fa-user userIcon"></i></a>
        <i class="fa-solid fa-cart-shopping cartIcon"></i>

      </div>


      
    </div>
       </div>
    </div>
  )
}

export default NavbarPc