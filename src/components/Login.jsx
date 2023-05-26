import React from 'react'
import "./Login.css"
import {useNavigate} from "react-router-dom"
import logo from './LoginImage.png'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='Login'>
      <div className='login--body'>
        <div className='form'>
          <form>
            <h1>User Login</h1>
            <input type="email" name='email' placeholder='Email'></input>
            <input type="password" name="password" placeholder='Password'></input>
            <button type='submit' onClick={()=>navigate('home')} >LOGIN</button>
            <h4>Not a member?<span onClick={()=>navigate('register')}>  <u>Sign up</u></span></h4>
          </form>
        </div>

        <div className='media--logo'>
          <img src={logo} alt="Logo"/>
        </div>
      </div>
    </div>
  )
}

export default Login
