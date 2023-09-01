import React, {useCallback} from 'react'
import './index.css'

const SingleProductNav = ({item, onClick, isActive}) => {

  return (
    <li onClick={useCallback(() => onClick(item.id), [onClick, item.id])} className={`text-link gr5 ${isActive ? 'desc-nav-active' : ''}`}>{item.pg}</li>
  )
}

export default SingleProductNav