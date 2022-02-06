import React from 'react'
import { Divider, Container, Skeleton, Typography } from '@mui/material'

import RestaurantList from '../components/RestaurantList'

const Restaurants = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mb: '20px' }}>
                <Typography variant="h3" align="center" sx={{ mt: '20px' }}>
                    All Restaurants
                </Typography>
                <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 5, mt: '10px' }}
                />
                <RestaurantList />
            </Container>
        </>
    )
}

export default Restaurants
