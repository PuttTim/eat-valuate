import { useState, useEffect } from 'react'
import {
    Grid,
    Typography,
    TextField,
    Box,
    Card,
    Button,
    InputAdornment,
    IconButton,
    FormGroup,
    Switch,
    FormControl,
    FormControlLabel
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLoginUserMutation, useLazyGetUserByIdQuery } from '../api/users'
import { createToast } from '../app/slices/toast'
import { authenticateUser } from '../app/slices/auth'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loginUser] = useLoginUserMutation()
    const [getUser] = useLazyGetUserByIdQuery()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [rememberUser, setRememberUser] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        loginUser({ username, password })
            .unwrap()
            .then(response => {
                console.table(response)
                getUser(response.id)
                    .unwrap()
                    .then(response => {
                        console.table(response)
                        dispatch(
                            authenticateUser({
                                authenticated: true,
                                userData: response
                            })
                        )

                        dispatch(
                            createToast({
                                open: true,
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'center'
                                },
                                severity: 'success',
                                message: 'Redirecting back to Home page..',
                                title: `Welcome ${response.username}!`
                            })
                        )
                        if (rememberUser) {
                            localStorage.setItem(
                                'userData',
                                JSON.stringify(response)
                            )
                        }
                    })

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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

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
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={handlePassword}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end">
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={rememberUser}
                                        onChange={() => {
                                            setRememberUser(!rememberUser)
                                        }}
                                    />
                                }
                                label="Remember User?"
                            />
                        </FormGroup>
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
