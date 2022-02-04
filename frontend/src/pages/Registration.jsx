import { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Container,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from '@mui/material/'

import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const Registration = () => {
    const [tab, setTab] = useState('')

    const handleChange = (event, newAlignment) => {
        tab === '' ? setTab('login') : setTab(newAlignment)
    }

    return (
        <Container maxWidth="md">
            <ToggleButtonGroup
                exclusive
                fullWidth
                value={tab}
                color="success"
                onChange={handleChange}>
                <ToggleButton disableFocusRipple value="login">
                    <Typography>Sign In</Typography>
                </ToggleButton>
                <ToggleButton value="register">
                    <Typography>Register</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
            {tab === 'login' ? <SignIn /> : <SignUp />}
        </Container>
    )
}

export default Registration
