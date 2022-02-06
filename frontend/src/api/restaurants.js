import api from './api'

const restaurantsApi = api.injectEndpoints({
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({ url: `/restaurant/` }),
            method: 'GET'
        }),
        getRestaurantById: builder.query({
            query: id => ({ url: `/restaurant/${id}` }),
            method: 'GET'
        })
    })
})

export const { useGetRestaurantsQuery, useLazyGetRestaurantByIdQuery } =
    restaurantsApi
