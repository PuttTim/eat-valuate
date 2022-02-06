import api from './api'

const reviewsApi = api.injectEndpoints({
    endpoints: builder => ({
        getReviewByRestaurantId: builder.query({
            query: id => ({ url: `/review/restaurant/${id}` }),
            method: 'GET'
        })
    })
})

export const { useLazyGetReviewByRestaurantIdQuery } = reviewsApi
