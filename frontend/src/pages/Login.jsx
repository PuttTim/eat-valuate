import { useState, useEffect } from 'react'
import {
    Box,
    Container,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    Card
} from '@mui/material'

import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const Login = () => {
    const [tab, setTab] = useState('')

    const handleChange = (event, newAlignment) => {
        tab === '' ? setTab('register') : setTab(newAlignment)
    }

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
            <Container maxWidth="md" static>
                <Card>
                    <ToggleButtonGroup
                        exclusive
                        fullWidth
                        value={tab}
                        onChange={handleChange}>
                        <ToggleButton disableRipple value="login">
                            <Typography>Sign In</Typography>
                        </ToggleButton>
                        <ToggleButton disableRipple value="register">
                            <Typography>Register</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Card>

                {tab === 'register' ? <SignUp /> : <SignIn />}
            </Container>
        </Box>
    )
}

export default Login
