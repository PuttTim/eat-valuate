import { useState, useEffect } from 'react'
import {
    Grid,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Box,
    Container,
    Card,
    Button,
    Snackbar,
    Alert
} from '@mui/material'

import { useLoginUserMutation } from '../api/users'

const SignIn = () => {
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const [errorPassword, setErrorPassword] = useState(false)
    const [errorUsername, setErrorUsername] = useState(false)

    const [loginUser] = useLoginUserMutation()

    const handleSubmit = event => {
        event.preventDefault()
        loginUser({ username: username, password: password })
            .unwrap()
            .then(response => {
                setErrorPassword(false)
                setErrorUsername(false)
            })
            .catch(error => {
                switch (error.status) {
                    case 403:
                        setErrorPassword(true)
                    case 404:
                        setErrorUsername(true)
                }
            })
    }

    const handleClose = () => {}

    const handleUsername = event => {
        setUsername(event.target.value)
        setErrorUsername(false)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
        setErrorPassword(false)
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
