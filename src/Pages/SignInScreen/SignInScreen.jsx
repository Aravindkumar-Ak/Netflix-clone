import React, { useState } from 'react'
import "./SignInScreen.css"
import { auth } from '../../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword }from "firebase/auth"
const SignInScreen = () => {
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

      const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
      console.log(authUser);
    }).catch((err)=>{
    alert(err.message);
    });
      } 

        const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
          console.log(authUser);
        }).catch((err)=>{
          alert(err.message)
        })
        }

return (
    <div className='signin_page'>
     <form>
<h2>SignIn</h2>

<input type="Email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button className='signin_btn'type="submit" onClick={signIn}>Sign In</button>
<h4>
  <span className='signup__color'>New to Netflix?</span><span className='signup__link' onClick={register}> Sign up now</span>
</h4>
        </form>
    </div>
  )
}

export default SignInScreen