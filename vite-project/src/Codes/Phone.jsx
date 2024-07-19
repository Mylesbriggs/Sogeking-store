import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import Section from './Section'
import PhoneCathelog from './PhoneCathelog'

function Phone() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>
      <div className='PhoneAcc top2'>
       <h1 className="text-center  textDress">Check our  phones <br /> & <br />accessories </h1>
      </div>
      <PhoneCathelog/>
      <Section/>
    </div>
  )
}

export default Phone