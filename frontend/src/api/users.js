import api from './api'

const usersApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: id => ({ url: `/user/${id}` }),
            method: 'GET'
        }),
        registerUser: builder.mutation({
            query: user => ({
                url: '/user/register',
                method: 'POST',
                body: user
            })
        })
    })
})

export const {
    useGetUsersQuery,
    useLazyGetUsersQuery,
    useRegisterUserMutation
} = usersApi