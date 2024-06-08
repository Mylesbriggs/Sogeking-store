import React, { useState } from 'react';
import NavbarMobile from './Codes/NavbarMobile';
import NavbarPc from './Codes/NavbarPc';
import "./Profile.css"

const PayForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePayment = async () => {
    // Assuming you have an API endpoint to handle the payment
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          expiry,
          cvv,
          name,
        }),
      });

      if (response.ok) {
        // Payment successful, handle accordingly
        console.log('Payment successful');
      } else {
        // Payment failed, handle accordingly
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error occurred while processing payment:', error);
    }
  };

  return (
    
    <div >
      <NavbarMobile/>
      <NavbarPc/>

      <h1 className="text2 text-center">Pay the fee of $1.87 to start advertising on our website</h1>
      <div className="JugPopUps3 container">
      <h2>Debit Card Payment</h2>
      <div>
        <label>Card Number:</label>
        <input className='input3' type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </div>
      <div>
        <label>Expiry:</label>
        <input className='input3' type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      </div>
      <div>
        <label>CVV:</label>
        <input className='input3' type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </div>
      <div>
        <label>Name on Card:</label>
        <input className='input3' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default PayForm;






// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());

// app.post('/api/payment', (req, res) => {
//   const { cardNumber, expiry, cvv, name } = req.body;

//   // Here you would implement the logic to process the payment
//   // For this example, let's just simulate a successful payment
//   if (cardNumber && expiry && cvv && name) {
//     res.status(200).json({ message: 'Payment successful' });
//   } else {
//     res.status(400).json({ error: 'Invalid payment details' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });