import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import PcProfile from './PcProfile'
import ProfileMobile from './ProfileMobile'








function Balance() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>
      
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3 userslide ">
          <PcProfile/>
          <ProfileMobile/>

        </div>
        <div className="col-lg-10 col-md-9 col-sm-9">
          <h1 className="text-center">Your Balance:</h1>
          <h1 className="text-center amnt">$1200.00</h1>
          <div className="top"></div>
          <div className="line"></div>
          <div className="top"></div>
          <h4></h4>
          <div className="top"></div>
          <h5>Do you want a paid promotion?</h5>
          <a href="http://localhost:5173/paidpromotion"><button>Get Started</button></a>

        </div>

      </div>
    </div>
  )
}

export default Balance