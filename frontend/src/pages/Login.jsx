import { useState, useEffect } from 'react'
import {
    Grid,
    Paper,
    Typography,
    TextField,
    ButtonGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Checkbox,
    Button,
    Box,
    Avatar,
    Link,
    Container,
    Stack
} from '@mui/material'

const Login = () => {
    const [gender, setGender] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
    const [password, setPassword] = useState(null)
    const [submitDisabled, setSubmitDisabled] = useState(true)

    const handleRegister = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.table({
            username: data.get('username'),
            fullname: `${data.get('firstName')}  ${data.get('lastName')}`,
            email: data.get('email'),
            password: data.get('password'),
            passwordConfirm: data.get('passwordConfirm'),
            gender: data.get('gender'),
            country: data.get('country'),
            city: data.get('city'),
            zipcode: data.get('zipcode')
        })
    }

    const handleGenderChange = event => {
        setGender(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handlePasswordConfirm = event => {
        console.log(event)
        if (password != event.target.value) {
            console.log('Password does not match')
            setSubmitDisabled(true)
        } else {
            console.log('Password matches')
            setSubmitDisabled(false)
        }
    }

    useEffect(() => {
        console.log(password)
    }, [password])

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={5} sx={{ padding: '20px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Box component="form" onSubmit={handleRegister}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography>Username (required)</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required={true}
                                    fullWidth
                                    id="username"
                                    name="username"
                                    placeholder="User1234"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Full name (required)</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Peter"
                                    autoFocus
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required={true}
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Parker"
                                    autoComplete="family-name"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    Email Address (required)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required={true}
                                    fullWidth
                                    id="email"
                                    name="email"
                                    placeholder="user@email.com"
                                    autoComplete="email"
                                    type="email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>Password (required)</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required={true}
                                    fullWidth
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    type="password"
                                    onChange={handlePassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    autoComplete="new-password"
                                    type="password"
                                    onChange={handlePasswordConfirm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Gender (required)</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        onChange={handleGenderChange}
                                        name="row-radio-buttons-group">
                                        <FormControlLabel
                                            value="Female"
                                            control={<Radio />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            value="Male"
                                            control={<Radio />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            value="Other"
                                            control={<Radio />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Address (required)</Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    name="country"
                                    placeholder="Country"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="zipcode"
                                    name="zipcode"
                                    placeholder="Zip Code"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Mobile Number (required)
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="mobile_number"
                                    name="mobile number"
                                    placeholder="9876 5432"
                                    type="tel"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={submitDisabled}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, color: '#ffffff' }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default Login
