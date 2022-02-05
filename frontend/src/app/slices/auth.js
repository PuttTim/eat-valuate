import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authenticated: false,
    userData: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        authenticateUser: (state, action) => {
            state.authenticated = true
            state.userData = action.payload.userData
        },
        unauthenticateUser: state => {
            state.authenticated = false
            state.userData = {}
        }
    }
})

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer
