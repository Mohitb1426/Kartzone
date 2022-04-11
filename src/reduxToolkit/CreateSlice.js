import { createSlice } from '@reduxjs/toolkit';
import Prod from '../Products.json'

const myProducts = Prod.arrayOfProducts;
const initialState = {
    value: {
        finalProduct: myProducts
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
    },
})
export const { handleProduct } = counterSlice.actions

export default counterSlice.reducer