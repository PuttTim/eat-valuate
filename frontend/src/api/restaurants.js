import api from './api'

const restaurantsApi = api.injectEndpoints({
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({ url: `/restaurant/` }),
            method: 'GET'
        })
    })
})

export const { useGetRestaurantsQuery } = restaurantsApi
