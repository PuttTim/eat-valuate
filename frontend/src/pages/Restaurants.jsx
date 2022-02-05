import React from 'react'

import { Container, Grid } from '@mui/material'

import RestaurantCard from '../components/RestaurantCard'

const Restaurants = () => {
    const restaurantData = [
        {
            id: 1,
            name: 'Young, Nelson and Jackson',
            location: '65664 Stephen Lane Suite 068',
            pricing: '$$$',
            photo: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=540&w=720',
            website: ['youngnelsonandjackson.com'],
            email: ['youngnelsonandjackson@gmail.com'],
            mobile_number: ['11457676525'],
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
                '06:00:00',
                '06:00:00',
                '06:00:00',
                '06:00:00',
                '06:00:00',
                '06:00:00',
                '06:00:00'
            ],
            closing: [
                '15:00:00',
                '15:00:00',
                '15:00:00',
                '15:00:00',
                '15:00:00',
                '15:00:00',
                '18:00:00'
            ],
            category: 'Thai',
            avg_rating: null,
            review_count: 0
        },
        {
            id: 2,
            name: 'Valentine-Luna AAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            location: '8985 Anderson Courts Suite 497',
            pricing: '$$',
            photo: 'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=540&w=720',
            website: ['valentineluna.com'],
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
                '05:30:00',
                '05:30:00',
                '05:30:00',
                '05:30:00',
                '05:30:00',
                '05:30:00',
                '05:30:00'
            ],
            closing: [
                '23:00:00',
                '23:00:00',
                '23:00:00',
                '23:00:00',
                '23:00:00',
                '23:00:00',
                '23:00:00'
            ],
            category: 'Japanese • Korean • Western',
            avg_rating: null,
            review_count: 0
        },
        {
            id: 3,
            name: 'Stewart-Rogers',
            location: '8421 Jonathon Park',
            pricing: '$$$',
            photo: 'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=540&w=720',
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
    ]

    return (
        <Container maxWidth="lg" sx={{ mt: '50px' }}>
            <Grid container>
                {restaurantData.map((restaurant, index) => {
                    return (
                        <Grid item xs={4}>
                            <RestaurantCard key={index} data={restaurant} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Restaurants
