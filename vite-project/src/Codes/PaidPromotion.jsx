import React from 'react'
import NavbarMobile from './NavbarMobile';
import NavbarPc from './NavbarPc';
import PcProfile from './PcProfile';
import ProfileMobile from './ProfileMobile';

import Banner from "./Banner";


function PaidPromotion() {
  return (
    <div className=''>
       <NavbarMobile/>
       <NavbarPc/>

       <div className="row">

        <div className="col-lg-2 col-md-3 col-sm-3 userslide ">
          <PcProfile/>
          <ProfileMobile/>
        
        </div>


        <div className="col-lg-10 col-md-9 col-sm-9">
          <div className="container">
          <img className='bouncingFlower' src="https://t4.ftcdn.net/jpg/02/75/28/95/360_F_275289557_YptaQZDnGnDkcgm8b792ItXOqvvkTQAr.jpg" alt="" />
              
          <h1 className="text-center top">
            Want more audience on our website? <br />why not try paid promotion?
          </h1>
          <div className=''></div>
          <h1 className='text-center text2'>Paid promotion <br /> includes</h1>
          
          </div>
        </div>
       </div>
       <div className="container">
       <ul>
            <li><h2><strong>Ads on our website</strong></h2> </li>
            <div className="top2"></div>
            <div className='JugPopUps'>
              <img className='jug' src="https://img.freepik.com/premium-photo/golden-jug-with-sunset-background_865967-209179.jpg?w=900" alt="" />
              <p>Check Out This Golden Jug</p>
            </div>
            <div className="top2">
              <h3>Your Item Will Be displayed as a Pop Up At Random Pages Of Our Site</h3>
            </div>
            <div className="top"></div>
            <li><h2><strong>Banner advertisment</strong></h2></li>
            <div className="JugPopUps2">
             
                <Banner/>
            </div>
            <div className="top2">
              <h3>
                You Are Likely To Reach A Wider Audience Through The Sites Banner
              </h3>
            </div>
            <div className="top"></div>

            
          </ul>

          <h1 className="text2 text-center">
            Click the button below to start advertising your items on Sogeking
            
          </h1>
          <a href="http://localhost:5173/payment"><button>Click to start</button></a>
       </div>

    </div>
  )
}

export default PaidPromotion