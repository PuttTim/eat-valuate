import { useState, useEffect } from 'react'
import {
    Grid,
    Typography,
    TextField,
    Box,
    Container,
    Card,
    Button
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLoginUserMutation } from '../api/users'
import { createToast } from '../app/slices/toast'
import { authenticateUser } from '../app/slices/auth'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loginUser] = useLoginUserMutation()

    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = event => {
        event.preventDefault()
        loginUser({ username, password })
            .unwrap()
            .then(response => {
                console.table(response)
                dispatch(authenticateUser())
                dispatch(
                    createToast({
                        open: true,
                        message: `${response.message}!`,
                        severity: 'success',
                        anchorOrigin: { vertical: 'top', horizontal: 'center' }
                    })
                )
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            })
            .catch(error => {
                if (error) {
                    console.table(error)
                    dispatch(
                        createToast({
                            open: true,
                            message: error.data.message,
                            severity: 'error'
                        })
                    )
                }
            })
    }

    const handleClose = () => {}

    const handleUsername = event => {
        setUsername(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    return (
        <Card elevation={16} sx={{ padding: '20px' }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>Username (required)</Typography>
                        <TextField
                            required={true}
                            fullWidth
                            id="username"
                            name="username"
                            placeholder="User1234"
                            onChange={handleUsername}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Password (required)</Typography>
                        <TextField
                            required={true}
                            fullWidth
                            id="username"
                            name="username"
                            placeholder="User1234"
                            onChange={handlePassword}
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            sx={{ color: '#ffffff' }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

export default SignIn
