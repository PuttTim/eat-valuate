import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    endpoints: builder => ({}),
    tagTypes: ['Review', 'Restaurant', 'User']
})

export default apiSlice
