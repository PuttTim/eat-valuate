import { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Container } from '@mui/material'
import Registration from '../components/SignUp'
import SignIn from '../components/SignIn'

const Login = () => {
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexGrow: 1,
                backgroundImage:
                    'url(https://source.unsplash.com/1920x1080/?food)'
            }}>
            <Container component="main" maxWidth="md">
                <SignIn />
                {/* <Registration /> */}
            </Container>
        </Box>
    )
}

export default Login
