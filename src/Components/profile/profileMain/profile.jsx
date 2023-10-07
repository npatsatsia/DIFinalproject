import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './index.css'
import Security from '../security/security'
import EditProfile from '../editProfile/editProfile'
import Help from '../help/help'
import Appearance from '../appearance/appearance'
import Notification from '../notification/notification'

const Profile = () => {
  const location = useLocation()

  const handleProfile = () => {
    switch (location.pathname) {
      case '/profile/edit-profile': return <EditProfile/>;
      case '/profile/help': return <Help/>;
      case '/profile/notification': return <Notification/>;
      case '/profile/appearance': return <Appearance/>;
      case '/profile/security': return <Security/>;
    }
  }

  return (
    <article className='edit-profile'>
      <div className='user-profile-container'>
        <aside className='user-profile-aside'>
            <div className="aside-func-current flex aice">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clipPath="url(#clip0_2_35)">
                  <path d="M30.82 30.18L21.66 21L30.82 11.82L28 9L16 21L28 33L30.82 30.18Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_2_35">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className='text-XXL drk'>Settings</span>
            </div>
            <div className='user-aside-func'>
              <nav className="aside-func-nav flex ">
                  <div className="aside-func-edit">
                    <NavLink to='/profile/edit-profile' className={'flex aice navlink gap12'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 45 45" fill="none">
                        <g clipPath="url(#clip0_2_55)">
                          <path d="M26.3625 16.9125L28.0875 18.6375L11.1 35.625H9.375V33.9L26.3625 16.9125ZM33.1125 5.625C32.6437 5.625 32.1562 5.8125 31.8 6.16875L28.3687 9.6L35.4 16.6312L38.8312 13.2C39.5625 12.4688 39.5625 11.2875 38.8312 10.5563L34.4438 6.16875C34.0688 5.79375 33.6 5.625 33.1125 5.625ZM26.3625 11.6063L5.625 32.3438V39.375H12.6562L33.3937 18.6375L26.3625 11.6063Z" fill="#858585"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_55">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='text-XL gr9'>Edit profile</span>
                    </NavLink>
                  </div>
                  <div className="aside-func-notification">
                    <NavLink to='/profile/notification' className={'flex aice navlink gap12'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_2_58)">
                          <path d="M20 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 35.1667 18.1667 36.6667 20 36.6667ZM30 26.6667V18.3333C30 13.2167 27.2834 8.93334 22.5 7.8V6.66667C22.5 5.28334 21.3834 4.16667 20 4.16667C18.6167 4.16667 17.5 5.28334 17.5 6.66667V7.8C12.7334 8.93334 10 13.2 10 18.3333V26.6667L6.66669 30V31.6667H33.3334V30L30 26.6667ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.85 10.8333 20 10.8333C24.15 10.8333 26.6667 14.2 26.6667 18.3333V28.3333Z" fill="#858585"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_58">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                        </svg>
                      <span className='text-XL gr9'>Notification</span>
                    </NavLink>
                  </div>
                  <div className="aside-func-security">
                    <NavLink to='/profile/security' className={'flex aice navlink gap12'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_2_61)">
                          <path d="M30 13.3333H28.3334V10C28.3334 5.4 24.6 1.66666 20 1.66666C15.4 1.66666 11.6667 5.4 11.6667 10V13.3333H10C8.16669 13.3333 6.66669 14.8333 6.66669 16.6667V33.3333C6.66669 35.1667 8.16669 36.6667 10 36.6667H30C31.8334 36.6667 33.3334 35.1667 33.3334 33.3333V16.6667C33.3334 14.8333 31.8334 13.3333 30 13.3333ZM15 10C15 7.23333 17.2334 5 20 5C22.7667 5 25 7.23333 25 10V13.3333H15V10ZM30 33.3333H10V16.6667H30V33.3333ZM20 28.3333C21.8334 28.3333 23.3334 26.8333 23.3334 25C23.3334 23.1667 21.8334 21.6667 20 21.6667C18.1667 21.6667 16.6667 23.1667 16.6667 25C16.6667 26.8333 18.1667 28.3333 20 28.3333Z" fill="#858585"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_61">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='text-XL gr9'>Security</span>
                    </NavLink>
                  </div>
                  <div className="aside-func-appearance">
                    <NavLink to='/profile/appearance'className={'flex aice navlink gap12'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_2_66)">
                          <path d="M32.3833 21.6333C32.45 21.1 32.5 20.5667 32.5 20C32.5 19.4333 32.45 18.9 32.3833 18.3667L35.9 15.6167C36.2166 15.3667 36.3 14.9167 36.1 14.55L32.7666 8.78333C32.6166 8.51667 32.3333 8.36667 32.0333 8.36667C31.9333 8.36667 31.8333 8.38333 31.75 8.41667L27.6 10.0833C26.7333 9.41667 25.8 8.86667 24.7833 8.45L24.15 4.03333C24.1 3.63333 23.75 3.33333 23.3333 3.33333H16.6666C16.25 3.33333 15.9 3.63333 15.85 4.03333L15.2166 8.45C14.2 8.86667 13.2666 9.43333 12.4 10.0833L8.24998 8.41667C8.14998 8.38333 8.04998 8.36667 7.94998 8.36667C7.66664 8.36667 7.38331 8.51667 7.23331 8.78333L3.89998 14.55C3.68331 14.9167 3.78331 15.3667 4.09998 15.6167L7.61664 18.3667C7.54998 18.9 7.49998 19.45 7.49998 20C7.49998 20.55 7.54998 21.1 7.61664 21.6333L4.09998 24.3833C3.78331 24.6333 3.69998 25.0833 3.89998 25.45L7.23331 31.2167C7.38331 31.4833 7.66664 31.6333 7.96664 31.6333C8.06664 31.6333 8.16664 31.6167 8.24998 31.5833L12.4 29.9167C13.2666 30.5833 14.2 31.1333 15.2166 31.55L15.85 35.9667C15.9 36.3667 16.25 36.6667 16.6666 36.6667H23.3333C23.75 36.6667 24.1 36.3667 24.15 35.9667L24.7833 31.55C25.8 31.1333 26.7333 30.5667 27.6 29.9167L31.75 31.5833C31.85 31.6167 31.95 31.6333 32.05 31.6333C32.3333 31.6333 32.6166 31.4833 32.7666 31.2167L36.1 25.45C36.3 25.0833 36.2166 24.6333 35.9 24.3833L32.3833 21.6333ZM29.0833 18.7833C29.15 19.3 29.1666 19.65 29.1666 20C29.1666 20.35 29.1333 20.7167 29.0833 21.2167L28.85 23.1L30.3333 24.2667L32.1333 25.6667L30.9666 27.6833L28.85 26.8333L27.1166 26.1333L25.6166 27.2667C24.9 27.8 24.2166 28.2 23.5333 28.4833L21.7666 29.2L21.5 31.0833L21.1666 33.3333H18.8333L18.5166 31.0833L18.25 29.2L16.4833 28.4833C15.7666 28.1833 15.1 27.8 14.4333 27.3L12.9166 26.1333L11.15 26.85L9.03331 27.7L7.86664 25.6833L9.66664 24.2833L11.15 23.1167L10.9166 21.2333C10.8666 20.7167 10.8333 20.3333 10.8333 20C10.8333 19.6667 10.8666 19.2833 10.9166 18.7833L11.15 16.9L9.66664 15.7333L7.86664 14.3333L9.03331 12.3167L11.15 13.1667L12.8833 13.8667L14.3833 12.7333C15.1 12.2 15.7833 11.8 16.4666 11.5167L18.2333 10.8L18.5 8.91667L18.8333 6.66667H21.15L21.4666 8.91667L21.7333 10.8L23.5 11.5167C24.2166 11.8167 24.8833 12.2 25.55 12.7L27.0666 13.8667L28.8333 13.15L30.95 12.3L32.1166 14.3167L30.3333 15.7333L28.85 16.9L29.0833 18.7833ZM20 13.3333C16.3166 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3166 26.6667 20 26.6667C23.6833 26.6667 26.6666 23.6833 26.6666 20C26.6666 16.3167 23.6833 13.3333 20 13.3333ZM20 23.3333C18.1666 23.3333 16.6666 21.8333 16.6666 20C16.6666 18.1667 18.1666 16.6667 20 16.6667C21.8333 16.6667 23.3333 18.1667 23.3333 20C23.3333 21.8333 21.8333 23.3333 20 23.3333Z" fill="#858585"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_66">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='text-XL gr9'>Appearance</span>
                    </NavLink>
                  </div>
                  <div className="aside-func-help">
                    <NavLink to='/profile/help' className={'flex aice navlink gap12'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_2_69)">
                          <path d="M18.3333 30H21.6666V26.6667H18.3333V30ZM20 3.33334C10.8 3.33334 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33334 20 3.33334ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66667 20 6.66667C27.35 6.66667 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 10C16.3166 10 13.3333 12.9833 13.3333 16.6667H16.6666C16.6666 14.8333 18.1666 13.3333 20 13.3333C21.8333 13.3333 23.3333 14.8333 23.3333 16.6667C23.3333 20 18.3333 19.5833 18.3333 25H21.6666C21.6666 21.25 26.6666 20.8333 26.6666 16.6667C26.6666 12.9833 23.6833 10 20 10Z" fill="#858585"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2_69">
                            <rect width="40" height="40" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className='text-XL gr9'>Help</span>
                    </NavLink>
                  </div>
              </nav>
            </div>
        </aside>
        {handleProfile()}
      </div>
    </article>
  )
}

export default Profile
 