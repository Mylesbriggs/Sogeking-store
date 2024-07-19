import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import CarCathelog from './CarCathelog'
import Section from './Section'

function Car() {
  return (
    <div>
      <NavbarPc/>
      <NavbarMobile/>
      <div className='CarAcc top2'>
       <h1 className="text-center  textDress">Be in your own world</h1>
      </div>
      <CarCathelog/>
      <Section/>

      
    </div>
  )
}

export default Car