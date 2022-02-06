import api from './api'

const restaurantsApi = api.injectEndpoints({
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({ url: `/restaurant/`, method: 'GET' }),
            providesTags: ['Restaurant']
        }),
        getRestaurantById: builder.query({
            query: id => ({ url: `/restaurant/${id}`, method: 'GET' }),
            providesTags: ['Restaurant']
        })
    })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } =
    restaurantsApi
