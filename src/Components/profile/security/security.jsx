import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'
import { putUserChange } from '../../../slices/user'
import { FaInfoCircle, FaTimesCircle, FaCheckCircle} from "react-icons/fa";
import avatar from '../../../Assets/images/authAvatar.png'


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Security = () => {

  const [newPass, setNewPass] = useState('')
  const [validNewPass, setValidNewPass] = useState(false)

  const [rePass, setRePass] = useState('')
  const [validRePass, setValidRePass] = useState(false)

  const [oldPass, setOldPass] = useState('')
  // const [message, setMessage] = useState('')

  const [hovered, setHovered] = useState(false)

  const dispatch = useDispatch()

  const handleChangePassword = async (e) => {
    e.preventDefault()
    const v1 = PWD_REGEX.test(newPass);
    if (!v1) {
      // setMessage("Invalid Entry");
      return;
  }

    if(newPass === rePass && newPass.length >= 6 && oldPass.length >= 6) {
      await dispatch(putUserChange({newPassword: newPass, userName: '', email: ''}))
      // .then(() => setMessage('successfully changed'))
      setNewPass('')
      setRePass('')
      setOldPass('')
    }
  }

  useEffect(() => {
    setValidNewPass(PWD_REGEX.test(newPass));
    setValidRePass(newPass === rePass);
  }, [newPass, rePass])

  return (
    <section className='user-security-section'>
      <div className='user-security-container'>
        <div className="user-security-heading flex aice">
          <h1 className='h1-title drk'>Security</h1>
          <img src={avatar} alt="avatar" />
        </div>
        <form className='user-security-inputs' onSubmit={(e) => handleChangePassword(e)}>
          <div className='security-inputs-title h3-title drk'>Change Password</div>
          <div className='security-new-password'>
            <div className="security-enter-password">
              <label className='text-large drk' htmlFor="secpass">Enter new password
                <FaCheckCircle className={validNewPass ? "valid" : "hide"} />
                <FaTimesCircle className={validNewPass || !newPass ? "hide" : "invalid"} />
              </label>
              <input type="password" id='secpass' value={newPass} onChange={(e) => (setNewPass(e.target.value))}/>
            </div>
            <div className="security-re-enter-password">
              <label className='text-large drk' htmlFor="secrepass">confirm new password
                <FaCheckCircle className={validRePass && rePass ? "valid" : "hide"} />
                <FaTimesCircle className={validRePass || !rePass ? "hide" : "invalid"} />
              </label>
              <input type="password" id='secrepass' value={rePass} onChange={(e) => (setRePass(e.target.value))}/>
            </div>
          </div>
          <div className="security-old-password">
            <label className='text-large drk' htmlFor="secoldpass">confirm old password</label>
            <div>
              <input type="password" id='secoldpass' value={oldPass} onChange={(e) => (setOldPass(e.target.value))}/>
              <FaInfoCircle className='shouldHoverPRF' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/> 
            </div>
            <p className={hovered? "hoveredProfilePass" : "offscreen"} >
              <FaInfoCircle />
              If you enter a fake current password in this input and if you pass other validations successfully too, your request will be confirmed.<br/>
              ძველ პაროლის ველში არასწორი მიმდინარე პაროლის შეყვანის შემთხვევაში, თუ სხვა ვალიდაციები წარმატებით გაიარეთ, თქვენი მოთხოვნა მაინც დადასტურდება.
            </p>
          </div>
          <div className="user-buttons-container">
            <div className='edit-confirm-btn'>
              <button className='wht' type='submit'>Save</button>
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
