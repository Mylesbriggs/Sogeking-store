import React from 'react'
import NavbarMobile from './NavbarMobile';
import ClothesCathelog from './ClothesCatelog';
import NavbarPc from './NavbarPc';
import Section from './Section';







function Clothes() {
  return (
    <div>
      
      <NavbarPc/>
      <NavbarMobile/>
      <h1 className="text-center">Dress to impress</h1>
      <ClothesCathelog/>
      <Section/>
      
      
      

    </div>
  )
}

export default Clothes