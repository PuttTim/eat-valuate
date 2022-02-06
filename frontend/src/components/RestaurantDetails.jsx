import React from 'react'
import {
    Container,
    Paper,
    Button,
    Box,
    Card,
    Typography,
    Grid
} from '@mui/material'

const RestaurantDetails = () => {
    const restaurant = {
        id: 3,
        name: 'Stewart-Rogers',
        location: '8421 Jonathon Park',
        pricing: '$$$',
        photo: [
            'https://images.unsplash.com/photo-1515668166700-4c11137632fc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=540&w=720',
            'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=540&w=720'
        ],
        website: ['order.stewartrogers.com', 'stewartrogers.com'],
        email: ['valentineluna@gmail.com'],
        mobile_number: ['0347793262073'],
        days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        opening: [
            '10:30:00',
            '10:30:00',
            '10:30:00',
            '10:30:00',
            '10:30:00',
            '10:30:00',
            '10:30:00'
        ],
        closing: [
            '13:00:00',
            '13:00:00',
            '13:00:00',
            '13:00:00',
            '13:00:00',
            '13:00:00',
            '13:00:00'
        ],
        category: 'Halal',
        avg_rating: 4.5,
        review_count: 2
    }

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Typography align="center" variant="h2">
                        {restaurant.name}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RestaurantDetails
