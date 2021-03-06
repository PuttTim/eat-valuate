import api from './api'

const usersApi = api.injectEndpoints({
    endpoints: builder => ({
        getUserById: builder.query({
            query: id => ({ url: `/user/${id}`, method: 'GET' }),
            invalidatesTags: ['Restaurant']
        }),
        registerUser: builder.mutation({
            query: user => ({
                url: '/user/register',
                method: 'POST',
                body: user
            })
        }),
        loginUser: builder.mutation({
            query: credentials => ({
                url: '/user/login',
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const {
    useLazyGetUserByIdQuery,
    useRegisterUserMutation,
    useLoginUserMutation
} = usersApi
