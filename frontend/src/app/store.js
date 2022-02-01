import { configureStore } from '@reduxjs/toolkit'

import apiSlice from '../api/api'
import toastReducer from './slices/snackbar'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        toast: toastReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store
