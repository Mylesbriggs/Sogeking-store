import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc';
import GamesCathelog from './GamesCathelog';
import Section from './Section';



function GamesConsole() {
  return (
    <div>
      <NavbarPc/>
      <NavbarMobile/>
      <div className='gamesbanner top2'>
       <h1 className="text-center  textDress">Be in your own world</h1>
      </div>
      <GamesCathelog/>
      <Section/>
    </div>
  )
}

export default GamesConsole