import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarPc from './NavbarPc'
import ProfileMobile from './ProfileMobile'
import PcProfile from './PcProfile';

function Report() {
  return (
    <div>
      <NavbarMobile/>
      <NavbarPc/>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3 userslide ">
          <PcProfile/>
          <ProfileMobile/>

        </div>
        <div className="col-lg-10 col-md-9 col-sm-9 container ">
          <div className="top"></div>
          <div className="h1 text">Report A Problem</div>
          <div className='ReportDiv contain text-center'>
            
              <h5> Describe the problem</h5>
              <p>Please provide as much detail as possible so we can better identify the problem <br />When(time/date) did the problem occur? <br />What is the exact error that you encountered?</p>

          </div>
          <div className="top"></div>
          <input className='ReportInp' type="text" />
          <div className="top"></div>
          <button>Submit</button>
          <p className='text-center'> We will review and solve this problem, thank you.</p>
        </div>

      </div>
    </div>
  )
}

export default Report