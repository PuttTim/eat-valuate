import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    autoHideDuration: 2500,
    severity: 'info',
    message: ''
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState: initialState,
    reducers: {
        createToast: (state, action) => {
            state.open = action.payload.open ?? initialState.open
            state.anchorOrigin =
                action.payload.anchorOrigin ?? initialState.anchorOrigin
            state.autoHideDuration =
                action.payload.autoHideDuration ?? initialState.autoHideDuration
            state.severity = action.payload.severity ?? initialState.severity
            state.message = action.payload.message ?? initialState.message
        },
        deleteToast: state => {
            state.open = false
        }
    }
})

export const { createToast, deleteToast } = toastSlice.actions

export default toastSlice.reducer
