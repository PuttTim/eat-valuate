import api from './api'

const usersApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: id => ({ url: `/user/${id}` }),
            method: 'GET'
        })
    })
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi
