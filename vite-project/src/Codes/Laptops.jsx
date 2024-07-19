import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import LaptopContent from './LaptopContent'
import Section from './Section'


function Laptops() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>
      <div className='PcAndAccessories top2'>
       <h1 className="text-center  textDress">Explore Latest PCs and accessories</h1>
      </div>
      <LaptopContent/>
      <Section/>
    </div>
  )
}

export default Laptops