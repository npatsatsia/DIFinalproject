import productsApi from '../API/axios'

const products = async (props) => {
    const {currCategory = '', priceMin = '', priceMax = ''} = props
        return await productsApi.get(`product/products?CategoryId=${currCategory && currCategory}&PriceFrom=${priceMin && priceMin}&PriceTo=${priceMax && priceMax}`)
}

export default products