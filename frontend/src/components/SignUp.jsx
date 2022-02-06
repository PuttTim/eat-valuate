import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    Grid,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Box,
    Card,
    Button,
    InputAdornment,
    IconButton
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import CountrySelect from './CountrySelect'
import { useRegisterUserMutation } from '../api/users'
import { createToast } from '../app/slices/toast'

const SignUp = props => {
    const [username, setUsername] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [firstname, setFirstname] = useState(undefined)
    const [lastname, setLastname] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [mobile_number, setMobileNumber] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [city, setCity] = useState(undefined)
    const [zipcode, setZipcode] = useState(undefined)

    const [validatePassword, setValidatePassword] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [validateUsername, setValidateUsername] = useState('')
    const [validateMobileNumber, setValidateMobileNumber] = useState('')
    const [validateZipcode, setValidateZipcode] = useState('')

    const [registerUser] = useRegisterUserMutation()

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        const userInformation = {
            username,
            email,
            password,
            fullname: `${firstname} ${lastname}`,
            gender,
            zipcode,
            city,
            country,
            mobile_number
        }

        registerUser(userInformation)
            .unwrap()
            .then(response => {
                dispatch(
                    createToast({
                        open: true,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        severity: 'success',
                        message: 'Redirecting back to Login page..',
                        title: `Successfully registered ${username}!`
                    })
                )
                setTimeout(() => {
                    props.onSuccess('login')
                }, 1000)
            })
            .catch(error => {
                if (error.status == 409) {
                    setValidateUsername('Duplicate Username')
                }
            })
    }

    const handlePasswordConfirm = event => {
        if (password != event.target.value) {
            setValidatePassword(true)
            setDisableSubmit(true)
        } else {
            setValidatePassword(false)
            setDisableSubmit(false)
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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = event => {
        event.preventDefault()
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
                                event.target.value.length > 32
                                    ? setValidateUsername(
                                          'Maximum 32 characters'
                                      )
                                    : setValidateUsername('')
                            }}
                            error={Boolean(validateUsername)}
                            FormHelperTextProps={{ error: true }}
                            helperText={
                                validateUsername ? validateUsername : ''
                            }
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
                            placeholder="98765432"
                            type="tel"
                            onChange={event => {
                                setMobileNumber(
                                    event.target.value.replace(/\s/g, '')
                                )
                                event.target.value.length > 20
                                    ? setValidateMobileNumber(
                                          'Maximum 20 characters'
                                      )
                                    : setValidateMobileNumber('')
                            }}
                            FormHelperTextProps={{ error: true }}
                            helperText={
                                validateMobileNumber ? validateMobileNumber : ''
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Address (required)</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CountrySelect
                            onChange={value => {
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
                                event.target.value.length > 10
                                    ? setValidateZipcode(
                                          'Maximum 10 characters'
                                      )
                                    : setValidateZipcode('')
                            }}
                            FormHelperTextProps={{ error: true }}
                            helperText={validateZipcode ? validateZipcode : ''}
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
                            type={showPassword ? 'text' : 'password'}
                            onChange={event => {
                                setPassword(event.target.value)
                            }}
                            helperText=" "
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handlePasswordConfirm}
                            error={validatePassword}
                            FormHelperTextProps={{ error: true }}
                            helperText={
                                validatePassword
                                    ? 'Password does not match'
                                    : ''
                            }
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
                        <Button
                            type="submit"
                            disabled={disableSubmit}
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
    )
}

export default SignUp
