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
            let displayProducts = [];
            const { type, price } = action.payload;
            if (type !== '') {
                displayProducts = myProducts.filter(product => product.type === type && product.price > price[0] && product.price < price[1])
            }
            else {
                displayProducts = myProducts.filter(product => product.price > price[0] && product.price < price[1])
            }
            state.value.finalProduct = displayProducts;
        }
    },
})
export const { handleProduct } = counterSlice.actions

export default counterSlice.reducer