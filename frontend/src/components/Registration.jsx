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
    Stack,
    Card
} from '@mui/material'

import CountrySelect from './CountrySelect'

const Registration = () => {
    const [username, setUsername] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [firstname, setFirstname] = useState(undefined)
    const [lastname, setLastname] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [mobile_number, setMobileNumber] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [passwordConfirm, setPasswordConfirm] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [city, setCity] = useState(undefined)
    const [zipcode, setZipcode] = useState(undefined)

    const [validatePassword, setValidatePassword] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        const userInformation = {
            username: username,
            email: email,
            password: password,
            fullname: `${firstname} ${lastname}`,
            gender: gender,
            zipcode: zipcode,
            city: city,
            country: country,
            mobile_number: mobile_number
        }
        console.table(userInformation)
    }

    const handlePasswordConfirm = event => {
        if (password != event.target.value) {
            setValidatePassword(true)
        } else {
            setValidatePassword(false)
        }
    }

    const handleEmail = event => {
        if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                event.target.value
            )
        ) {
            setEmail(event.target.value)
            setValidateEmail(false)
        } else {
            setValidateEmail(true)
        }
    }

    return (
        <Container maxWidth="md">
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
                        <Grid item xs={12} md={6}>
                            <Typography>Username (required)</Typography>
                            <TextField
                                required={true}
                                fullWidth
                                id="username"
                                name="username"
                                placeholder="User1234"
                                onChange={event => {
                                    setUsername(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography>Gender (required)</Typography>
                            <FormControl>
                                <RadioGroup
                                    row
                                    onChange={event => {
                                        setGender(event.target.value)
                                    }}
                                    name="gender-radio-buttons-group"
                                    sx={{ mt: '7px' }}>
                                    <FormControlLabel
                                        value="Female"
                                        control={<Radio required />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="Male"
                                        control={<Radio required />}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="Other"
                                        control={<Radio required />}
                                        label="Other"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Full Name (required)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                placeholder="Peter"
                                autoComplete="given-name"
                                onChange={event => {
                                    setFirstname(event.target.value)
                                }}
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
                                onChange={event => {
                                    setLastname(event.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>Email Address (required)</Typography>
                            <TextField
                                required={true}
                                fullWidth
                                id="email"
                                name="email"
                                placeholder="user@email.com"
                                autoComplete="email"
                                type="email"
                                onChange={handleEmail}
                                error={validateEmail}
                                FormHelperTextProps={{ error: true }}
                                helperText={
                                    validateEmail ? 'Invalid email address' : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>Mobile Number (required)</Typography>
                            <TextField
                                required
                                fullWidth
                                id="mobile_number"
                                name="mobile number"
                                placeholder="9876 5432"
                                type="tel"
                                onChange={event => {
                                    setMobileNumber(event.target.value)
                                }}
                                helperText=" "
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Address (required)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CountrySelect
                                onChange={value => {
                                    console.log(value)
                                    setCountry(value.code)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                id="city"
                                name="city"
                                placeholder="City"
                                onChange={event => {
                                    setCity(event.target.value)
                                }}
                                helperText=" "
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                id="zipcode"
                                name="zipcode"
                                placeholder="Zip Code"
                                onChange={event => {
                                    setZipcode(event.target.value)
                                }}
                                helperText=" "
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Password (required)</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required={true}
                                fullWidth
                                id="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="new-password"
                                type="password"
                                onChange={event => {
                                    setPassword(event.target.value)
                                }}
                                helperText=" "
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="passwordConfirm"
                                name="passwordConfirm"
                                placeholder="Confirm Password"
                                autoComplete="new-password"
                                type="password"
                                onChange={handlePasswordConfirm}
                                error={validatePassword}
                                FormHelperTextProps={{ error: true }}
                                helperText={
                                    validatePassword
                                        ? 'Pasword does not match'
                                        : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                sx={{ color: '#ffffff' }}>
                                Register your account
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Container>
    )
}

export default Registration
