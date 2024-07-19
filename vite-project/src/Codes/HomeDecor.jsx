import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import Section from './Section'
import HomeDecorCathelog from './HomedecorCathelog'


function HomeDecor() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>
      <div className='Homedecor top2'>
       <h1 className="text-center  textDress">Beautify your environment </h1>
      </div>
      <HomeDecorCathelog/>
      <Section/>
    </div>
  )
}

export default HomeDecor;