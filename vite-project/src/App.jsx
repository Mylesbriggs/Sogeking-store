import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import HomePage from './Codes/HomePage'
import ConfirmPassword from './Codes/Signup'
import Signin from './Codes/Signin'
import Profile from './Codes/Profle'
import SellerUploadPage from './Codes/Sell'
import Clothes from './Codes/Clothes'
import Balance from './Codes/Balance'
import PaidPromotion from './Codes/PaidPromotion'
import PayForm from './Codes/PayForm'
import GamesConsole from './Codes/GamesConsole'
import Laptops from './Codes/Laptops'
import HomeDecor from './Codes/HomeDecor'
import Phone from './Codes/Phone'
import Car from './Codes/Car'
import Report from './Codes/Report'
import Purchase from './Purchase'

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
          <Route path="/games" element={<GamesConsole/>}/>
          <Route path="/laptops" element={<Laptops/>}/>
          <Route path="/homedecoration" element={<HomeDecor/>}/>
          <Route path="/phone" element={<Phone/>}/>
          <Route path="/car" element={<Car/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/purchase" element={<Purchase/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;