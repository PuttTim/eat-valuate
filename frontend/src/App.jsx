import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'

import Toast from './components/Toast'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Profile from './pages/Profile'
import Restaurant from './pages/Restaurant'
import PageNotFound from './pages/PageNotFound'

import './index.css'

import CssBaseline from '@mui/material/CssBaseline'

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
                    <Route path="/restaurants/*" element={<Restaurant />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
