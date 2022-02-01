import { useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

const Toast = () => {
    const snackProps = useSelector(state => state.toast)

    const handleClose = () => {}

    useEffect(() => {
        console.table(snackProps)
    }, [snackProps])

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}>
                Wrong username or password
            </Alert>
        </Snackbar>
    )
}

export default Toast
