import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import HomePage from './Codes/HomePage'
import ConfirmPassword from './Codes/Signup'
import Signin from './Codes/Signin'
import Profile from './Profle'
import SellerUploadPage from './Codes/Sell'
import Clothes from './Codes/Clothes'
import Balance from './Codes/Balance'
import PaidPromotion from './Codes/PaidPromotion'
import PayForm from './PayForm'


import './App.css'



function App() {
  return (
    <div className='overflow'>
      <BrowserRouter>
        <Routes>
          <Route index element={<ConfirmPassword/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/sell" element={<SellerUploadPage/>}/>
          <Route path="/clothes" element={<Clothes/>}/>
          <Route path="/balance" element={<Balance/>}/>
          <Route path="/paidpromotion" element={<PaidPromotion/>}/>
          <Route path="/payment" element={<PayForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App