import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button } from '@mui/material'
import { spacing } from '@mui/system'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="text"
                        sx={{ fontFamily: 'Montserrat Alternates' }}>
                        eat-valuate
                    </Typography>

                    <Typography variant="text">Home</Typography>

                    <Typography variant="text">Restaurants</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
