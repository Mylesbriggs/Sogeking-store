import React from 'react'

function PcProfile() {
  return (
    <div className='Nav_bar'>
       <h5><a href="http://localhost:5173/profile">ITEMS</a></h5>
           <div className="top2"></div>
          <h5><a href="http://localhost:5173/balance">BALANCE</a><i class="fa-solid fa-coins"></i></h5>
          <div className="top2"></div>
          <h5><a href="http://localhost:5173/sell">SELL </a></h5>
          <div className="top2"></div>
          <h5><a href="http://localhost:5173/paidpromotion">PAID PROMOTION</a> <i class="fa-solid fa-rectangle-ad"></i></h5>
          <div className="top2"></div>
          <h5><a href="http://localhost:5173/report">REPORT A PROBLEM</a> <i class="fa-solid fa-bug"></i></h5>
          <div className="top2"></div>
          <h5><a href="">EDIT PROFILE</a><i class="fa-solid fa-pen-to-square"></i></h5>
          <div className="top2"></div>
          <h5><a href="">CONTACT US</a></h5>
          <div className="top2"></div>
          <h5><a href="">LOG OUT</a></h5> 
    </div>
  )
}

export default PcProfile