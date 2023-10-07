import React from 'react'
import './index.css'
import avatar from '../../../Assets/images/authAvatar.png'

const EditProfile = () => {
  return (
        <section className='edit-profile-container'>
          <div className="user-profile-edit-heading flex aice">
            <h1 className='h1-title drk'>Edit Profile</h1>
            <img src={avatar} alt="avatar" />
          </div>
          <form className='user-inputs-container'>
            <div className='user-name-surname'>
              <div className="user-firstname">
                <label className='text-large drk' htmlFor="user-firstname">First Name</label>
                <input disabled type="text" placeholder='Your Name' id='user-firstname'/>
              </div>
              <div className="user-lastname">
                <label className='text-large drk' htmlFor="user-lastname">Last Name</label>
                <input disabled type="text" placeholder='Your Lastname' id='user-lastname'/>
              </div>
            </div>
            <div className="user-email">
              <label className='text-large drk' htmlFor="user-email">Email</label>
              <input type="email" placeholder='Your Email' id='user-email'/>
            </div>
            <div className="user-username">
                <label className='text-large drk' htmlFor="user-username">Username</label>
                <input disabled type="text" placeholder='Your username' id='user-username'/>
            </div>
            <div className='user-contact'>
              <div className="user-contact-number">
                <label className='text-large drk' htmlFor="user-contact-number">Contact Number</label>
                <input disabled type="text" placeholder='Your Contact Number' id='user-contact-number'/>
              </div>
            </div>
            <div className="user-password">
              <label className='text-large drk' htmlFor="user-password">Password</label>
              <input type="password" placeholder='Your Password' id='user-password'/>
            </div>
            <div className="user-buttons-container">
                <div className='edit-confirm-btn'>
                    <button className='wht'>Save</button>
                </div>
                <div className='edit-cancel-btn'>
                    <button className='blu'>Cancel</button>
                </div>
            </div>
          </form>
        </section>
  )
}

export default EditProfile
