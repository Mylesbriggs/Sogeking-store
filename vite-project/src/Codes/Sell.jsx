
import NavbarPc from './NavbarPc';
import NavbarMobile from './NavbarMobile';
import React, { useState } from 'react';
import '../sell.css'


const SellerUploadPage = () => {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState(null);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleItemPriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setItemImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to backend for item upload
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('itemCategory', itemCategory);
    formData.append('itemPrice', itemPrice);
    formData.append('itemImage', itemImage);
   
    console.log(formData);
  };

  return (
    <div>
      <NavbarPc/>
      <NavbarMobile/>
      <h1 className="text-center">Welcome to 市場 start selling for free now</h1>
      <div className=" container sell">
        <div className="row">
          <div className="col-md-6">
          <h1>Create your page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <div></div>
          <input type="text" value={itemName} onChange={handleItemNameChange} className='input3' />
        </label>
        <br />
        <label>
          Item Category:
          <div></div>
          <input type="search" value={itemCategory} onChange={handleItemCategoryChange} className='input3' />
        </label>
        <br />
        <label>
          Item Price:
          <div></div>
          <input type="number" value={itemPrice} onChange={handleItemPriceChange} className='input3'/>
        </label>
        <br />
        <label>
          Item Image:
          <div></div>
          <input type="file" accept="image/*" onChange={handleImageChange} className='input3'/>
        </label>
        <br />
        <button type="submit">Upload Item</button>
      </form>
          </div>
          <div className="col-md-6">
            <h4>Create your page and start selling on 市場it is completely free </h4>
            <div className='top'></div>
            <h4>You can contact us directly on <a href="mailto:mylezriggz@gmail.com"><i class="fa-solid fa-envelope"></i></a>for any confusion and questions you may have</h4>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SellerUploadPage;