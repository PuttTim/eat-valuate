import api from './api'

const reviewsApi = api.injectEndpoints({
    endpoints: builder => ({
        getReviewById: builder.query({
            query: id => ({ url: `review/${id}`, method: 'GET' }),
            providesTags: ['Review']
        }),
        getReviewByRestaurantId: builder.query({
            query: id => ({ url: `/review/restaurant/${id}`, method: 'GET' }),
            providesTags: ['Review']
        }),
        createReview: builder.mutation({
            query: review => ({
                url: '/review/create',
                method: 'POST',
                body: review
            }),
            invalidatesTags: ['Review', 'Restaurant']
        }),
        editReview: builder.mutation({
            query: review => ({
                url: `/review/edit/${review.id}`,
                method: 'PUT',
                body: review
            }),
            invalidatesTags: ['Review', 'Restaurant']
        }),
        deleteReview: builder.mutation({
            query: id => ({ url: `/review/delete/${id}`, method: 'DELETE' }),
            invalidatesTags: ['Review', 'Restaurant']
        })
    })
})

export const {
    useGetReviewByRestaurantIdQuery,
    useCreateReviewMutation,
    useEditReviewMutation,
    useDeleteReviewMutation
} = reviewsApi
