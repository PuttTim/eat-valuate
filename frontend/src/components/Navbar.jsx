import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button } from '@mui/material'
import { spacing } from '@mui/system'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <AppBar position="static" sx={{}}>
                <Toolbar>
                    <Button
                        variant="text"
                        href="/"
                        disableRipple
                        sx={{
                            fontFamily: 'Montserrat Alternates',
                            fontSize: '25px',
                            color: '#FFFFFF'
                        }}>
                        eat-valuate
                    </Button>

                    <Button
                        variant="text"
                        href="/"
                        disableRipple
                        sx={{ color: '#FFFFFF' }}>
                        Home
                    </Button>
                    <Button
                        variant="text"
                        href="/restaurant"
                        disableRipple
                        sx={{ color: '#FFFFFF' }}>
                        Restaurants
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
