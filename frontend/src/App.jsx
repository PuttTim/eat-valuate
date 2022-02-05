import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import Toast from './components/Toast'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'
import Restaurants from './pages/Restaurants'
import Restaurant from './pages/Restaurant'
import PageNotFound from './pages/PageNotFound'

import './index.css'

import { authenticateUser } from './app/slices/auth'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#000000'
                }
            }
        }
    }
})

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData) {
            console.table(JSON.parse(localStorage.getItem('userData')))
            dispatch(
                authenticateUser({
                    authenticated: true,
                    userData: JSON.parse(localStorage.getItem('userData'))
                })
            )
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Toast />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/restaurants/*" element={<Restaurants />} />
                    <Route path="/restaurant/*" element={<Restaurant />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
