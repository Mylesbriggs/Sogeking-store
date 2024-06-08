import React from 'react'
import NavbarPc from './NavbarPc'
import NavbarMobile from './NavbarMobile'
import Banner from './Banner'
import Contents from './Contents'
import Section from './Section'

function HomePage() {
  return (
    <div>
      <NavbarPc/>
      <NavbarMobile/>
      <Banner/>
      <Contents/>
      <Section/>
    </div>
  )
}

export default HomePage