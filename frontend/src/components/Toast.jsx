import { useEffect } from 'react'
import { Snackbar, Alert, AlertTitle } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToast } from '../app/slices/toast'

const Toast = () => {
    const toastProps = useSelector(state => state.toast)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(deleteToast())
    }

    return (
        <Snackbar
            open={toastProps.open}
            anchorOrigin={toastProps.anchorOrigin}
            autoHideDuration={toastProps.autoHideDuration}
            onClose={handleClose}>
            <Alert
                severity={toastProps.severity}
                onClose={handleClose}
                sx={{ width: '100%' }}>
                <AlertTitle>{toastProps.title}</AlertTitle>
                {toastProps.message}
            </Alert>
        </Snackbar>
    )
}

export default Toast
