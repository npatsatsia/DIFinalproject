import React from 'react'
import './index.css'


const ProductsListView = ({listView, setListview, products, error, loading, filterStr, setPriceRange, setFilterStr, priceRange}) => {
  
  let data = products
  
  if(priceRange !== []) {
    data = data.filter((item) => (+item.price > +priceRange[0] && +item.price < +priceRange[1]))
  }
  if(filterStr.length > 0) {
    data = data.filter((item) => (filterStr.includes(item.brand)))
  }
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClearFilters = () => {
    setFilterStr([])
  }

  const handleDeletefilter = (filterName) => {
    let newFilters = filterStr.filter((item) => (item !== filterName))
    setFilterStr([...newFilters])
  }

  return (
    <section className='products-list-section'>
      <div className='products-list-info-container'>
        <div className='products-view'>
          <div className='quantity-found-products'>
            <span className='text-base drk'>{`${data.length} items in`}</span>
            <span className='title-h6 drk'>{` Mobile Accessory`}</span>
          </div>
          <div className='list-info-right'>
            <div className='verified-check'>
              <input type="checkbox" className='checkbox' id='verified' />
              <label htmlFor="verified" className='text-base drk'>Verified only</label>
            </div>
            <div className='right-selectbox'>
              <span className='text-base drk'>Featured</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z" fill="#8B96A5"/>
              </svg>
            </div>
            <div className='products-list-view'>
              <div className={`grid-view ${!listView? 'active' : ''}`} onClick={() => {setListview(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 3H3V11H11V3Z" fill="#1C1C1C"/>
                  <path d="M11 13H3V21H11V13Z" fill="#1C1C1C"/>
                  <path d="M21 3H13V11H21V3Z" fill="#1C1C1C"/>
                  <pat h d="M21 13H13V21H21V13Z" fill="#1C1C1C"/>
                </svg>
              </div>
              <div className={`list-view ${listView? 'active' : ''}`} onClick={() => {setListview(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z" fill="#1C1C1C"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        { filterStr.length > 0?
          <div className='products-filter-history-container'>
            <ul className='filters-history-ul'>
              {filterStr.map((item, index) => {
                return <li key={index + 523452351542423} className='single-filter-li'>
                  <div className='products-single-filter'>
                    <span className='text-base gr6'>{item}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"  onClick={() => (handleDeletefilter(item))}>
                      <path d="M15.8334 5.34163L14.6584 4.16663L10.0001 8.82496L5.34175 4.16663L4.16675 5.34163L8.82508 9.99996L4.16675 14.6583L5.34175 15.8333L10.0001 11.175L14.6584 15.8333L15.8334 14.6583L11.1751 9.99996L15.8334 5.34163Z" fill="#8B96A5"/>
                    </svg>
                  </div>
                </li>
              })}
            </ul>
            <div className='products-clear-filters' onClick={() => (handleClearFilters())}>
              <span className='text-base blu'>Clear all filters</span>
            </div>
          </div> :
          ''
        }
        <div className='products-list-container'>
          <ul className={`products-list-ul ${!listView? 'grid' : '' }`}>
            {
              listView ? data.map(item => {
                return <li key={item.id}>
                      <div className='list-single-item-container'>
                        <div className='for-right-setup'>
                          <div className='list-single-image-container'>
                            <img src={item.images[3]} alt="item-image" />
                          </div>
                          <div className='list-single-item-info'>
                            <div className='list-product-title'>
                              <span className='text-title drk'>{item.title}</span>
                            </div>
                            <div className='list-product-price'>
                              <h4 className='title-h4 drk'>${item.price}</h4>
                            </div>
                            <div className='list-product-about'>
                              <div className='list-product-stars'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017"/>
                                </svg>
                                <span className='text-base org'>7.5</span>
                              </div>
                              <svg className='products-list-dot none330' xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#DEE2E7"/>
                              </svg>
                              <span className='text-base gr5 none330'>154 orders</span>
                              <svg className='products-list-dot none580' xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#DEE2E7"/>
                              </svg>
                              <span className='text-base grn'>Free Shipping</span>
                            </div>
                            <div className='products-list-desc'>
                              <span className='text-info gr6'>{item.description}</span>
                            </div>
                            <div className='product-link-btn'>
                              <span className='text-btn blu'>View details</span>
                            </div>
                          </div>
                      </div>
                      <div className='favorite-icon-container'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z" fill="#0D6EFD"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </li>
              }) : data.map(item => {
                return <li key={item.id}>
                                      <div className='grid-single-item-container'>
                    <div className='grid-product-image-container'>
                      <img src={item.images[3]} alt="product-image" />
                    </div>
                    <div className='grid-info-heart-container'>
                      <div className='grid-products-info'>
                        <div className='grid-product-price'>
                          <span className='h5-title drk'>${item.price}</span>
                        </div>
                        <div className='list-product-stars'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="15" viewBox="0 0 80 15" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z" fill="#D5CDC5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z" fill="#FF9017"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z" fill="#FF9017"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z" fill="#FF9017"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z" fill="#FF9017"/>
                          </svg>
                          <span className='text-base org'>7.5</span>
                        </div>
                        <div className='grid-products-name'>
                          <span className='text-info gr8'>{item.title}</span>
                        </div>
                      </div>
                      <div className='favorite-icon-container forgrid'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z" fill="#0D6EFD"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProductsListView
