import { configureStore } from '@reduxjs/toolkit';
import  ChangeHandler from './CreateSlice'

export const store = configureStore({
    reducer: {
        Change: ChangeHandler
    },
})