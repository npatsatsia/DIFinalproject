import React from 'react'
import Social from './social/social'
import { socials } from '../../../Static/socialLogos'

const Socials = () => {
  return (
    <>
        {socials.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <Social icon={item.icon} text = {item.text}/>
                </React.Fragment>
            )
        })}
    </>
  )
}

export default Socials
