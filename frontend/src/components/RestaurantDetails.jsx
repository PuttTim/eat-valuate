import { useState, useEffect } from 'react'
import {
    Container,
    Paper,
    Button,
    Box,
    Card,
    Typography,
    Grid,
    Rating,
    Stack,
    Divider,
    Dialog,
    DialogTitle,
    Link
} from '@mui/material'

import GoogleMapsModal from './GoogleMapsEmbed'

const RestaurantDetails = () => {
    const [openMaps, setOpenMaps] = useState(false)

    const restaurant = {
        id: 3,
        name: 'Young, Nelson and Jackson',
        location: '71362 Kelly Trace Davisburgh, MO 83041',
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
            '10:30',
            '10:30',
            '10:30',
            '10:30',
            '10:30',
            '10:30',
            '10:30'
        ],
        closing: [
            '13:00',
            '13:00',
            '13:00',
            '13:00',
            '13:00',
            '13:00',
            '13:00'
        ],
        category: 'Japanese • Korean • Western',
        avg_rating: 4.5,
        review_count: 2
    }

    return (
        <>
            <Dialog
                onClose={() => {
                    !setOpenMaps(false)
                }}
                open={openMaps}>
                <DialogTitle>Google Maps</DialogTitle>
                <GoogleMapsModal location={restaurant.location} />
            </Dialog>
            <Container maxWidth="md">
                <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2">
                            {restaurant.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider
                            variant="middle"
                            sx={{ borderBottomWidth: 5 }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container rowSpacing={3}>
                            <Grid item xs={12}>
                                <Rating
                                    value={restaurant.avg_rating}
                                    precision={0.5}
                                    size="large"
                                    readOnly
                                    sx={{}}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Divider
                                    variant="middle"
                                    sx={{ borderBottomWidth: 5 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4">Cuisine</Typography>
                                <Typography variant="h5" sx={{ mt: '10px' }}>
                                    {restaurant.category}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack>
                            {restaurant.days.map((day, index) => {
                                return (
                                    <div key={index}>
                                        <Grid container>
                                            <Grid item xs={6} md={1}>
                                                <Typography align="left">
                                                    {day}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography align="right">{`${restaurant.opening[index]} - ${restaurant.closing[index]}`}</Typography>
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            })}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider
                            variant="middle"
                            sx={{ borderBottomWidth: 5 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={3}>
                            <Typography align="center" variant="h3">
                                Located at
                            </Typography>

                            <Typography align="center" variant="h5">
                                {restaurant.location}
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setOpenMaps(true)
                                }}
                                sx={{
                                    color: '#ffffff'
                                }}>
                                View on Google Maps
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider
                            variant="middle"
                            sx={{ borderBottomWidth: 5 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h3">
                            Contacts
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h4">Website: </Typography>
                        {restaurant.website.map((website, index) => {
                            return (
                                <Typography
                                    align="left"
                                    variant="h5"
                                    key={index}>
                                    <a href={`https://${website}`}>{website}</a>
                                </Typography>
                            )
                        })}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h4">Email: </Typography>
                        {restaurant.email.map((email, index) => {
                            return (
                                <Typography
                                    align="left"
                                    variant="h5"
                                    key={index}>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </Typography>
                            )
                        })}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h4">Mobile Number: </Typography>

                        {restaurant.mobile_number.map((number, index) => {
                            return (
                                <Typography
                                    align="left"
                                    variant="h5"
                                    key={index}>
                                    {number.replace(
                                        /\B(?=(?:\d{3})+(?!\d))/g,
                                        '-'
                                    )}
                                </Typography>
                            )
                        })}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default RestaurantDetails
