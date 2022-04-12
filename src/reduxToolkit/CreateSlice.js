import { createSlice } from '@reduxjs/toolkit';
import Prod from '../Products.json'

const myProducts = Prod.arrayOfProducts;
const initialState = {
    value: {
        finalProduct: myProducts,
        filterProduct: []
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleProduct: (state, action) => {
            const { type } = action.payload;
            const displayproducts = myProducts.filter(product => product.type === type)
            state.value.finalProduct = displayproducts;
        },
        handleSlider: (state, action) => {
            const { filterProduct, price } = action.payload;
            const displayFilterProducts = filterProduct.filter(product => product.price > price[0] && product.price < price[1])
            state.value.filterProduct = displayFilterProducts;
        },
    },
})
export const { handleProduct, handleSlider } = counterSlice.actions

export default counterSlice.reducer