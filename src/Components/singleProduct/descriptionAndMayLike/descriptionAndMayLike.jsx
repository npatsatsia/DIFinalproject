import React, {useEffect, useState} from 'react'
import './index.css'
import {BsCheck2} from "react-icons/bs";
import SingleProductNav from '../../extra/singlePDescriptionNav/singlePDescNav';
import { navLinks } from '../../../Static/singleProductNav'
import { useDispatch, useSelector } from 'react-redux';
import { getLatestProducts } from '../../../slices/sortedProducts';
import { useNavigate } from 'react-router-dom';

const DescriptionAndMayLike = ({singleProduct}) => {
    const [navact, setNavact] = useState('poiuy')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {latestProducts} = useSelector((state) => state.sortedProducts)


    useEffect(() => {
        dispatch(getLatestProducts())
    },[dispatch]) 

    if(!singleProduct) {
        return null
      }
      
  return (
    <section className='detail-desc-like-section'>
        <div className='detail-desc-like-container'>
            <div className='desc-side-container'>
                <nav>
                    <ul>
                        {navLinks.map((item) => {
                            return <SingleProductNav key={item.id} item={item} onClick={setNavact} isActive={navact === item.id}/>
                        })}
                    </ul>
                </nav>
                <div className='detail-desc-container'>
                    <span className='text-normal gr6'>{singleProduct.description}</span>
                </div>
                <table className='detail-desc-table'>
                    <tbody>
                        <tr>
                            <td className='gr6 text-base bkg2 pl10 w17 ptb107 bbw1px'>Model</td>
                            <td className='text-normal gr6 pl10 ptb107 bbw1px'>#8786867</td>
                        </tr>
                        <tr>
                            <td className='gr6 text-base bkg2 pl10 w17 ptb107 bbw1px'>Style</td>
                            <td className='text-normal gr6 pl10 ptb107 bbw1px'>Classic style</td>
                        </tr>
                        <tr>
                            <td className='gr6 text-base bkg2 pl10 w17 ptb107 bbw1px'>Certificate</td>
                            <td className='text-normal gr6 pl10 ptb107 bbw1px'>ISO-898921212</td>
                        </tr>
                        <tr>
                            <td className='gr6 text-base bkg2 pl10 w17 ptb107 bbw1px'>Size</td>
                            <td className='text-normal gr6 pl10 ptb107 bbw1px'>34mm x 450mm x 19mm</td>
                        </tr>
                        <tr>
                            <td className='gr6 text-base bkg2 pl10 w17 ptb107'>Memory</td>
                            <td className='text-normal gr6 pl10'>36GB RAM</td>
                        </tr>
                    </tbody>
                </table>
                <div className='detail-check-container'>
                    <div>
                        <BsCheck2 className='wh20 gr6'/>
                        <span className='text-normal gr6'>Some great feature name here</span>
                    </div>
                    <div>
                        <BsCheck2 className='wh20 gr6'/>
                        <span className='text-normal gr6'>Lorem ipsum dolor sit amet, consectetur </span>
                    </div>
                    <div>
                        <BsCheck2 className='wh20 gr6'/>
                        <span className='text-normal gr6'>Duis aute irure dolor in reprehenderit</span>
                    </div>
                    <div>
                        <BsCheck2 className='wh20 gr6'/>
                        <span className='text-normal gr6'>Some great feature name here</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='like-side-container'>
            <div className='detail-like-container'>
                <div className='like-title-container'>
                    <h6 className='title-h6 drk'>You may like</h6>
                </div>
                <div className='like-items-container'>
                    <ul>
                        {latestProducts.map((item) => {
                            return (<li onClick={() => {navigate(`/product/${item.id}`)}} key={item.id}>
                                        <div className='single-like'>
                                            <div className='like-img'>
                                                <img src={item.images[2]} alt="product" />
                                            </div>
                                            <div className='like-info'>
                                                <div>
                                                    <span className='text-normal drk'>{item.brand}</span>
                                                </div>
                                                <div>
                                                    <span className='text-normal gr5'>${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>)
                            })}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DescriptionAndMayLike
