import React, {useState, useRef, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../../API/productsAPI';
import './index.css'
import { BsFillCircleFill, BsGlobe2, BsShieldCheck, BsFillChatLeftTextFill, BsFillBasket3Fill, BsCheck2, BsHeart } from "react-icons/bs";
import italy from '../../../Assets/images/italy.png'


const SingleProductInfo = () => {
    const [more, setMore] = useState(false)

    const {productId} = useParams()
    const navigate = useNavigate()

    const containerRef = useRef(null)
    const slideRef = useRef()
    const imageRef = useRef()

    const dispatch = useDispatch()

    const {singleProduct, images, loading, error} = useSelector((state) => state.singleProduct)

    useEffect(() => {
        dispatch(fetchSingleProduct(productId));
      }, [dispatch, productId]);

    const handleShowMore = () => {
        setMore((prev) => (!prev))
    }

    const handleImageChange = (image) => {
        imageRef.current.setAttribute('src', image)
    }

    if(loading) {
        return <div>loading...</div>
    }

    if(error) {
        navigate('*')
    }
    

  const scrollPhoto = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = slideRef.current.clientWidth;
      const newScrollLeft =
        direction === 'forward'
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount;

          container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
          });
    }
  };

  


  return (
    <section className='detail-info-section'>
            <div className='detail-container'>
                <div className='detail-images-container'>
                    <div className='detail-main-image'>
                        <img src={singleProduct.thumbnail} alt="product" ref={imageRef} />
                    </div>
                    <div className='detail-additional-images' ref={containerRef}>
                        {images.map((item) => {
                            return (
                                    <div className='wh60br5' key={singleProduct.id + 99284662891234}>
                                        <img src={item} alt="tshirtimage" onClick={(e) => (handleImageChange(e.target.src))} ref={slideRef}/>
                                    </div>
                            )
                        })}
                        <div className='responsive-photo-slider'>
                            <div className='lrslider'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => (scrollPhoto('backward'))} >
                                    <path d="M13.3337 7.33329H5.22033L8.94699 3.60663L8.00033 2.66663L2.66699 7.99996L8.00033 13.3333L8.94033 12.3933L5.22033 8.66663H13.3337V7.33329Z" fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => (scrollPhoto('forward'))}>
                                    <path d="M8.00033 2.66663L7.06033 3.60663L10.7803 7.33329H2.66699V8.66663H10.7803L7.06033 12.3933L8.00033 13.3333L13.3337 7.99996L8.00033 2.66663Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail-info-container'>
                    <div className='detail-stock'>
                        <BsCheck2 className='stock-icon'/>
                        <span className='text-normal grn'>In stock</span>
                    </div>
                    <div className='detail-title'>
                        <h4>{singleProduct.title}</h4>
                    </div>
                    <div className='detail-mobile-price amp'>
                        <span className='title-h6 red'>${singleProduct.price}</span>
                    </div>
                    <div className='detail-mobile-inquiry amb'>
                        <div className='supplier-btn btn-blue'>Send inquiry</div>
                        <div className='mhc'>
                            <BsHeart className='blu wh24'/>
                        </div>
                    </div>
                    <div className='detail-more-info'>
                        <div className='detail-stars'>
                            <svg className='stars-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg className='stars-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg className='stars-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg className='stars-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg className='stars-svg' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <span className='text-base orn'>9.3</span>
                        </div>
                        <BsFillCircleFill className='review-circle'/>
                        <div className='detail-reviews'>
                            <BsFillChatLeftTextFill className='bs-icon'/>
                            <span className='text-base gr5'>32 reviews</span>
                        </div>
                        <BsFillCircleFill className='review-circle'/>
                        <div className='detail-sold'>
                            <BsFillBasket3Fill className='bs-icon'/>
                            <span className='text-base gr5'>154 sold</span>
                        </div>
                    </div>
                    <div className='detail-price-box'>
                        <div className='small-q'>
                            <h5 className='h5-title'>${singleProduct.price}</h5>
                            <span className='text-small gr8'>50-100 pcs</span>
                        </div>
                        <div className='medium-q'>
                            <h5 className='h5-title'>${singleProduct.price - singleProduct.price / 100 * 10}</h5>
                            <span className='text-small gr8'>100-700 pcs</span>
                        </div>
                        <div className='big-q'>
                            <h5 className='h5-title'>${singleProduct.price - singleProduct.price / 100 * 15}</h5>
                            <span className='text-small gr8'>700+ pcs</span>
                        </div>
                    </div>
                    <div className='detail-detail prc'>
                        <span className='text-base gr5 w12'>Price:</span>
                        <span className='text-base gr6'>Negotiable</span>
                    </div>
                    <div className='detail-detail tmd'>
                        <div>
                            <span className='text-base gr5 w12'>Type:</span>
                            <span className='text-base gr6'>Classic  shoes</span>
                        </div>
                        <div>
                            <span className='text-base gr5 w12'>Material:</span>
                            <span className='text-base gr6'>Plastic material</span>
                        </div>
                        <div>
                            <span className='text-base gr5 w12'>Design:</span>
                            <span className='text-base gr6'>Modern nice</span>
                        </div>
                    </div>
                    <div className='detail-detail cpw'>
                        <div>
                            <span className='text-base gr5 w12'>Customization:</span>
                            <span className='text-base gr6 w60' >Customized logo and design custom packages</span>
                        </div>
                        <div>
                            <span className='text-base gr5 w12'>Protection:</span>
                            <span className='text-base gr6'>Refund Policy</span>
                        </div>
                        <div>
                            <span className='text-base gr5 w12'>Warranty:</span>
                            <span className='text-base gr6'>2 years full warranty </span>
                        </div>
                    </div>
                    <div className='detail-mobile-description'>
                        <span className={`gr6 m-readmore ${more? 'more' : ''}`}>
                            {singleProduct.description}
                        </span>
                        <div onClick={() => (handleShowMore())}>{more? 'Read less' : 'Read more'}</div>
                    </div>
                </div>
                <div className='detail-supplier-container'>
                    <div className='container'>
                        <div className='detail-supplier'>
                            <div className='detail-supplier-info'>
                                <div className='supplier-avatar'>R</div>
                                <div className='supplier-name'>
                                    <span className='text-normal drk'>Supplier</span>
                                    <span className='text-normal drk'>Guanjoi Trading LLC</span>
                                </div>
                            </div>
                            <div className='supplier-more'>
                                <div className='supplier-country'>
                                    <img src={italy} alt="italy" />
                                    <span className='text-normal gr5'>Italy<span className='mb-none'>, Milano</span></span>
                                </div>
                                <div className='supplier-verified'>
                                    <BsShieldCheck className='gr5 wh20'/>
                                    <span className='text-normal gr5'>Verified<span className='mb-none'> Seller</span></span>
                                </div>
                                <div className='supplier-verified'>
                                    <BsGlobe2 className='gr5 wh20'/>
                                    <span className='text-normal gr5'>Worldwide<span className='mb-none'> shipping</span></span>
                                </div>
                            </div>
                            <div className='supplier-buttons'>
                                <div className='supplier-btn btn-blue'>Send inquiry</div>
                                <div className='supplier-btn btn-white'>Seller's profile</div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-heart-item'>
                        <BsHeart className='wh24 blu'/>
                        <span className='text-link blu'>Save for later</span>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SingleProductInfo
