import api from '../API/cart.axios'

const getCartProducts = async () => {
    return await api.get('cart/getmycartproducts',)
      .then((response) => {
        return response.data
      })
}

const addToCart = async (id) => {
    return await api.post('cart/addincart',
    {
        productId: id
    },
      )
}

const cartService = {
    getCartProducts,
    addToCart,
}

export default cartService