import React, { useState } from 'react'
import SignInScreen from '../SignInScreen/SignInScreen'
import "./LoginScreen.css"

const LoginScreen = () => {
    const[signIn,setSignIn]=useState(false)
  return (
    <div className='loginScreen'>
        <div className="login__contents">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""  className='login__logo'/>


    <button className='login_btn' onClick={()=>setSignIn(true)}>SignIn</button>


<div className="login_gradient"/>
        </div>
        <div className="loginScreen__body">
            {signIn?
            (<SignInScreen/>):(
<>
<h1>Unlimited Entertainment,TV Series and more @149</h1>
<h3>Watch anywhere cancel at anytime</h3>
<div className="loginScreen__input">
    <form >
        <input type="text" placeholder='Email Address' />
        <button className='getstarted_btn' onClick={()=>setSignIn(true)}>Get Started</button>
    </form>
</div>
</>
            )}
        </div>
    </div>
  )
}

export default LoginScreen