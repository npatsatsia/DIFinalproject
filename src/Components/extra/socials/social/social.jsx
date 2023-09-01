import React from "react"
import './index.css'

const Social = ({icon, text}) => {
    return (
        <div className='social-google hover'>
            {icon}
            <span className="social-text">{text}</span>
        </div>
    )
}

export default Social