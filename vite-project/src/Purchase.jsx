import React from 'react'
import NavbarMobile from './Codes/NavbarMobile'
import NavbarPc from './Codes/NavbarPc'
import Section from './Codes/Section';
import './Purchase.css'

function truncate(string, n){
  return string?.length > n ? string.substr(0 , n - 1) + '...' : string
}

function Purchase() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>

      <div className="purchase top container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h1>Name</h1>
          <img className="ClothesImg2" src="https://m.media-amazon.com/images/I/31x363D-d1L._AC_SR400,600_.jpg" alt="" />
          </div>

          <div className="col-lg-6 col-md-6 top">
            <h1 className='text2'>$0.00</h1>
            <div className="top3"></div>
          <h4><strong>{truncate("a white T-shirt for good jsjdfjiofioidoiwoneoiijwoieoiw owoww hwoowoirirsrgw pwojepwepp", 120)}</strong></h4>
          <div className="top"></div>
          <button className="dis">Add to cart</button>
          <button className="dis Buynow">Buy now</button>
          </div>

        </div>

      </div>
      <Section/>
    </div>
  )
}

export default Purchase