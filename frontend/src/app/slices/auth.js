import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        authenticateUser: state => {
            state.authenticated = true
        },
        unauthenticateUser: state => {
            state.authenticated = false
        }
    }
})

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer
