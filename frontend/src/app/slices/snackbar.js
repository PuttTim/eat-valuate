import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    autoHideDuration: 6000,
    severity: '',
    message: ''
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState: initialState,
    reducers: {
        createToast: (state, action) => {
            state.open = action.payload.open || initialState.open
            state.anchorOrigin =
                action.payload.anchorOrigin || initialState.anchorOrigin
            state.autoHideDuration =
                action.payload.autoHideDuration || initialState.autoHideDuration
            state.severity = action.payload.severity || initialState.severity
            state.message = action.payload.message || initialState.message
        }
    }
})

export const { createToast } = toastSlice.actions

export default toastSlice.reducer
