import React from 'react'
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'
import { selectUser } from '../../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const ProfileScreen = () => {

    const user=useSelector(selectUser);

    const logout=()=>{
        signOut(auth)
    }
  return (
    <div className='profileScreen'>
<Nav/>
<div className="profile_contents">
   <h1>Edit Profile</h1>
    <div className="profile_info">
   <img src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png" alt="" />
        <div className="profile_detail">
            <h3>{user.email}</h3>
            <div className="profile__plans">
                <h1>Netflix Plans</h1>
                <div className='Plans_info'>
                    <div>
                    <h2>Basic Plan</h2>
                      <p>INR 149</p>
                    </div>

                    <div >
                    <button className='Subscribe__btn'>subscribe</button>
                    </div>
                </div>
                <div className='Plans_info'>
                    <div>
                    <h2>Standard Plan</h2>
                      <p>INR 499</p>
                    </div>

                    <div >
                    <button className='Subscribe__btn'>subscribe</button>
                    </div>
                </div>
                <div className='Plans_info'>
                    <div>
                    <h2>Premium Plan</h2>
                      <p>INR 799</p>
                    </div>

                    <div >
                    <button className='Subscribe__btn subscribed'>subscribed</button>
                    </div>
                </div>
                
            <button className='signout_btn' onClick={logout}>Signout</button>
            </div>
           
        </div>
    </div>
</div>
    </div>
  )
}

export default ProfileScreen