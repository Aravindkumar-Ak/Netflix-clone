import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
const[show,setShow]=useState(false)

const transitionNavbar=()=>{
    if(window.scrollY>100){
        setShow(true)
    }else{
        setShow(false)
    }}
    useEffect(() => {
        window.addEventListener('scroll',transitionNavbar)
         
           return () => {
            window.removeEventListener('scroll',transitionNavbar)
           }
         }, [])
       
  return (
    <div className={`nav ${show && "nav__black"}`}     >
        <div className='nav__contents'>
            
          <Link to="/"> <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""  className='Netflix__logo'/></Link> 
           
  
        <Link to="/profile"><img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png" alt="" className='Netflix__avatar' /></Link>
       
          
        </div>
     
    </div>
  )
}

export default Nav