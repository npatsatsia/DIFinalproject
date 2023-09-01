import React, {useState} from 'react'
import './index.css'
import { RxChevronDown } from "react-icons/rx";


const SingleService = ({list, title}) => {
    const [toggle, setToggle] = useState(false)
  return (
        <div className='footer-about'>
            <div className='footer-title-toggle' onClick={() => (setToggle(prev => !prev))}>
                <h5 className='footer-title'>{title}</h5>
                <RxChevronDown className={`footer-chevron ${toggle ? 'rotate' : ''}`}/>
            </div>
            <div className={`footer-list footer-toggle ${toggle ? 'active' : ''}`}>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index + 5123562345}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
  )
}

export default SingleService
