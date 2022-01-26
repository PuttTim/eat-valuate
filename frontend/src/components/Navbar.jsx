import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { spacing } from '@mui/system'
import '../index.css'

const Navbar = () => {
    const navigate = useNavigate()

    const navigateTo = pageUrl => {}

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar>
                    <Button
                        variant="text"
                        href="/"
                        disableRipple
                        sx={{
                            fontFamily: 'Montserrat Alternates',
                            fontSize: '25px',
                            color: '#000000'
                        }}>
                        eat-valuate
                    </Button>

                    <Button
                        variant="text"
                        href="/"
                        disableRipple
                        sx={{ color: '#000000', fontSize: '20px' }}>
                        Home
                    </Button>
                    <Button
                        variant="text"
                        href="/restaurant"
                        disableRipple
                        sx={{ color: '#000000', fontSize: '20px' }}>
                        Restaurants
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
