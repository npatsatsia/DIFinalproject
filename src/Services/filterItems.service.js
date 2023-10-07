import products from '../API/products.axios'

const categories = async () => {
    return await products.get('product/categories',)
}


const brands = async () => {
    return await products.get('product/products')
}

const singleProduct = async (id) => {
    return await products.get(`product/products/${id}`)
}

const filterProductsBy = {
    categories,
    brands,
    singleProduct
}

export default filterProductsBy