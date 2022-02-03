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

import { useLoginUserMutation } from '../api/users'
import { createToast } from '../app/slices/toast'
import { authenticateUser } from '../app/slices/auth'
import { useDispatch } from 'react-redux'

const SignIn = () => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const [loginUser] = useLoginUserMutation()
    const dispatch = useDispatch()

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
        <Container maxWidth="sm">
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
        </Container>
    )
}

export default SignIn
