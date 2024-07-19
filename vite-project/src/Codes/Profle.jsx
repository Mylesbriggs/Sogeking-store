import React from 'react'
import NavbarPc from './NavbarPc';
import NavbarMobile from './NavbarMobile';
import ProfileMobile from './ProfileMobile';
import PcProfile from './PcProfile';
import '../Profile.css'


function truncate(string, n){
  return string?.length > n ? string.substr(0 , n - 1) + '...' : string
}

function Profile() {
  return (
    <div>
      <NavbarPc/>
      <NavbarMobile/>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3 userslide ">
          <PcProfile/>
          <ProfileMobile/>

        </div>


        <div className="col-lg-10 col-md-9 col-sm-9">
          <div className="usericondiv">
           <i className="fa-solid fa-user userIcon2"></i>
          </div>
          
          <div className="container">
          <div className="row">
                  <div className="col-lg-6    col-md-0 ">
                  <div className="clothes_Container ">
                    <div >
                      <img className="ClothesImg" src="https://m.media-amazon.com/images/I/31x363D-d1L._AC_SR400,600_.jpg" alt="" />
                    </div>
                    <div  className="ClothesName">
                      <h3 id='clothesnameid'>Name</h3>
                    </div>
                    <div className="CLothesNar">
                      <p><strong>{truncate("muijndicnbwiuebchbwuebcuhbweicb jnweieni wienciunwec wiefniwnef wienfouwnef wienowne  wiencin  woeninenfin2ef inwe i ec owe e edij efi ij i edij eijd wie", 80)}</strong></p>
                    </div>
                    <div className="ClothesPrice">
                      <h1>$0.00</h1>
                    </div>
                  </div>
                  </div>


                  <div className="col-lg-6  col-md-0">
                  <div className="clothes_Container ">
                    <div >
                      <img className="ClothesImg" src="https://m.media-amazon.com/images/I/31x363D-d1L._AC_SR400,600_.jpg" alt="" />
                    </div>
                    <div  className="ClothesName">
                      <h3 id='clothesnameid'>Name</h3>
                    </div>
                    <div className="CLothesNar">
                      <p><strong>{truncate("muijndicnbwiuebchbwuebcuhbweicb jnweieni wienciunwec wiefniwnef wienfouwnef wienowne  wiencin  woeninenfin2ef inwe i ec owe e edij efi ij i edij eijd wie", 80)}</strong></p>
                    </div>
                    <div className="ClothesPrice">
                      <h1>$0.00</h1>
                    </div>
                  </div>
                  </div>

                 
                  
                </div>
              
          </div>
         

        </div>
        
      </div>
      
          <div className="centerseeMore">
          <button >See more</button>
          <div className="top2"></div>
          <h5>Do you want a paid promotion?</h5>
          <a href="http://localhost:5173/paidpromotion"><button>Get Started</button></a>
          </div>
    </div>
  )
}

export default Profile