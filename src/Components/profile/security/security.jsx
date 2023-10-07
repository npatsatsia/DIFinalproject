import React from 'react'
import './index.css'
import avatar from '../../../Assets/images/authAvatar.png'
import { useState } from 'react'
import { putUserChange } from '../../../slices/user'
import { useDispatch } from 'react-redux'

const Security = () => {

  const [newPass, setNewPass] = useState('')
  const [rePass, setRePass] = useState('')
  const [oldPass, setOldPass] = useState('')

  const dispatch = useDispatch()

  const handleChangePassword = (e) => {
    dispatch(putUserChange(newPass))
  }

  return (
    <section className='user-security-section'>
      <div className='user-security-container'>
        <div className="user-security-heading flex aice">
          <h1 className='h1-title drk'>Security</h1>
          <img src={avatar} alt="avatar" />
        </div>
        <form className='user-security-inputs' onSubmit={(e) => e.preventDefault()}>
          <div className='security-inputs-title h3-title drk'>Change Password</div>
          <div className='security-new-password'>
            <div className="security-enter-password">
              <label className='text-large drk' htmlFor="secpass">Enter new password</label>
              <input type="password" id='secpass' value={newPass} onChange={(e) => (setNewPass(e.target.value))}/>
            </div>
            <div className="security-re-enter-password">
              <label className='text-large drk' htmlFor="secrepass">confirm new password</label>
              <input type="password" id='secrepass' value={rePass} onChange={(e) => (setRePass(e.target.value))}/>
            </div>
          </div>
          <div className="security-old-password">
            <label className='text-large drk' htmlFor="secoldpass">confirm old password</label>
            <input type="password" id='secoldpass' value={oldPass} onChange={(e) => (setOldPass(e.target.value))}/>
          </div>
          <div className="user-buttons-container">
            <div className='edit-confirm-btn'>
              <button className='wht' type='submit' onClick={() => handleChangePassword()}>Save</button>
            </div>
            <div className='edit-cancel-btn'>
              <button className='blu'>Cancel</button>
            </div>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Security
