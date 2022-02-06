import { useState, useEffect } from 'react'
import {
    Container,
    Button,
    Typography,
    Grid,
    Rating,
    Stack,
    Divider,
    Dialog,
    DialogTitle
} from '@mui/material'

import GoogleMapsModal from './GoogleMapsEmbed'

const RestaurantDetails = props => {
    const [openMaps, setOpenMaps] = useState(false)

    const restaurant = props.restaurant

    return (
        <>
            <Dialog
                onClose={() => {
                    !setOpenMaps(false)
                }}
                open={openMaps}
                fullWidth
                maxWidth="md">
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
                                    sx={{ borderBottomWidth: 2 }}
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
                                        <Grid
                                            container
                                            sx={{
                                                ml: { md: '100px', xs: '0px' }
                                            }}>
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
                        <Stack spacing={3}>
                            <Typography align="center" variant="h3">
                                Located at
                            </Typography>
                            <Grid item xs={12}>
                                <Divider
                                    variant="middle"
                                    sx={{ borderBottomWidth: 5 }}
                                />
                            </Grid>
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
                        <Typography align="center" variant="h3">
                            Contacts
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider
                            variant="middle"
                            sx={{ borderBottomWidth: 5 }}
                        />
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
