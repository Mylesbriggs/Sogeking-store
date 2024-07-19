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
      <div className='DressToImpress top2'>
       <h1 className="text-center  textDress">Dress to impress</h1>
      </div>
      < ClothesCathelog/>
      <Section/>
      
      
      

    </div>
  )
}

export default Clothes