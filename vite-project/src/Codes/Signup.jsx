import React, {useState} from 'react';
import '../signup.css'




const ConfirmPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Password is valid, you can proceed with your logic here
      window.location.assign("http://localhost:5173/home");
    }
  };


  return  (<div className='main'>
      
      <h1 className='text-center'>Welcome</h1>
      <div className='input1'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1 className='text-center'>Create account</h1>
        <div>
        <form onSubmit={handleSubmit}>
        <input className='input2' type="text" placeholder='First name' required/>
        <input className='input2' type="text" placeholder='Last name' required/>

        <input className='input2' type="email" placeholder='Email' required/>
        <input className='input2' type="password" placeholder='Password'            value={password}
            onChange={handlePasswordChange} required/>
            <h6>Must be 8 characters</h6>
        <input className='input2' type="password" placeholder='Confirm Passowrd'             value={confirmPassword}
            onChange={handleConfirmPasswordChange}  required/>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className='input2' >Enter</button>
        </form>
      </div>

            </div>
            <div className="col-md-6 signuptext">
            <p className=''>Already have an account? </p>
            <a href="http://localhost:5173/signin">
              <button>Sign in</button>
            </a>
            </div>
          </div>
        </div>

      </div>

    </div>)
  
}

export default ConfirmPassword;