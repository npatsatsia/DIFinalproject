import products from '../API/axios'

const latestProducts = async () => {
    return await products.get('product/latestproducts',)
}


const offeredProducts = async () => {
    return await products.get('product/offers')
}

const mostDemandProducts = async () => {
    return await products.get('product/mostdemandproducts')
}

const sortedProductsService = {
    latestProducts,
    offeredProducts,
    mostDemandProducts
}

export default sortedProductsService