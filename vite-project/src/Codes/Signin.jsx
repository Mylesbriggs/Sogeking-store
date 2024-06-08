import React from 'react'
import '../signup.css'




function Signin() {
  return  <div className='main'>
      
      <div className='input1'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1>Sign in</h1>
        <div>

        <input className='input2' type="email" placeholder='Email' />
        <input className='input2' type="password" placeholder='Password' id='pass1'/>

        <button className='input2' >Enter</button>
      </div>
      <p className='red' id='pas3'></p>
      
            </div>
            <div className="col-md-6 signuptext"><p >Don't have an account? </p>
            <div><a href="http://localhost:5173/"><button>Sign up</button></a></div></div>
          </div>
        </div>
      </div>

    </div>
  
}

export default Signin