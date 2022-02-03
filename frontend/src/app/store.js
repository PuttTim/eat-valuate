import { configureStore } from '@reduxjs/toolkit'

import apiSlice from '../api/api'
import toastReducer from './slices/toast'
import authReducer from './slices/auth'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        toast: toastReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store
