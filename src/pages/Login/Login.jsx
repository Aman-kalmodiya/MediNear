import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='container' style={{ }}>
      <div className='login'>
        <input className='input' type="text" placeholder='Enter your number' />
        <br/><br/>
        <input className='input' type="password" placeholder='password'/>
        <br/><br/>
        <button className='button'>Login</button>
      </div>
    </div>
  )
}

export default Login