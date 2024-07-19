import React from 'react'
import '../Contents.css'

function Contents() {
  return (
    <div className='Content  '>
      <div className="row">
    <div className='class_Container col-md-3'>
    <h3 className='top'>Fashion</h3>
    <div className='dis '>
      
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" alt="" />
      <p>Dresses</p>
    </div>
    <div className='dis'>
      <img className='fourpcs'  src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg" alt="" />
      <p>Knits</p>
    </div>
      <div className="dis">
        <img className='fourpcs'src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg" alt="" />
        <p>Jackets</p>
        </div>
      <div className='dis'>
        <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg" alt="" />
        <p>Jewelry</p>
      </div>
      <p className='blue'><a href="http://localhost:5173/clothes">See more</a></p>
  </div>
  <div className='class_Container col-3'>
    <h3 className="top">Gaming</h3>
    <img className='bigImg' src="https://assets-global.website-files.com/62be22872850996333a4861f/64db816a914550fddf101cab_pexels-lucie-liz-3165335.jpg" alt="" />
    <a href="http://localhost:5173/games"><p className="blue">See more</p></a>
  </div>
  <div className='class_Container col-3'>
      <h3 className="top">Deals in PCs</h3>
      <img className='bigImg' src="https://assets.opsys.co.uk/images/hero_mobile/359976-new-hero.jpg" alt="" />
      <a href="http://localhost:5173/laptops"><p className="blue">Shop now</p></a>
  </div>
  <div className='class_Container col-3'>
    <h3 className="top">Refresh your space</h3>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Dining</p>
    </div>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Home</p>
    </div>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Kitchen</p>
    </div>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Health and Beauty</p>
    </div>
    <a href="http://localhost:5173/homedecoration"><p className="blue">See more</p></a>

  </div>
  

  
</div>
<div className="row">
<div className='class_Container col-md-3'>
    <h3 className='top'>Phones and accessories</h3>
    <div className='dis'>
      
      <img className='fourpcs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFWwZ69EuoaWloocKNggaUoMRIFNdM4dsgw&s" alt="" />
      <p>iPhones</p>
    </div>
    <div className='dis'>
      <img className='fourpcs' src="data:image/jpeg;base64,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" alt="" />
      <p>Airpods pro</p>
    </div>
      <div className="dis">
        <img className='fourpcs' src="https://img.fruugo.com/product/5/84/216117845_max.jpg" alt="" />
        <p>Phone Holder</p>
        </div>
      <div className='dis'>
        <img className='fourpcs' src="https://i.pinimg.com/564x/49/75/38/49753867ae726731f1fa40c387b8a118.jpg" alt="" />
        <p>Pouch</p>
      </div>
      <a href="http://localhost:5173/phone"><p className='blue'>See more</p></a>
  </div>

  <div className='class_Container col-3'>
    <h3 className="top">Cars</h3>
    <div className="top"></div>
    <img className='bigImg' src="https://images.alphacoders.com/446/446059.jpg" alt="" />
    <a href="http://localhost:5173/car"><p className="blue">Shop office products</p></a>
  </div>

  <div className='class_Container col-3'>
      <h3 className="top">Deals in PCs</h3>
      <img className='bigImg' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" />
      <p className="blue">Shop now</p>
  </div>
  <div className='class_Container col-3'>
    <h3 className="top">Refresh your space</h3>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Dining</p>
    </div>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Home</p>
    </div>
    <div className="dis">
      <img className='fourpcs' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Kitchen</p>
    </div>
    <div className="dis">
      <img  className='fourpcs'src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />
      <p>Health and Beauty</p>
    </div>
    <p className="blue">See more</p>

  </div>
</div>


    </div>
  )
}

export default Contents