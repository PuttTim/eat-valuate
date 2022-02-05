import React from 'react'
import {
    Card,
    CardActions,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    Rating,
    Divider
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function RestaurantCard(props) {
    const restaurantData = props.data
    const navigate = useNavigate()

    const navigateTo = destination => {
        setTimeout(() => {
            navigate(`/restaurant/${destination}`)
        }, 200)
    }

    return (
        <Card
            elevation={5}
            sx={{ maxWidth: 300, minHeight: 320, maxHeight: 320 }}>
            <CardActionArea
                onClick={() => {
                    navigateTo(restaurantData.id)
                }}>
                <CardMedia
                    component="img"
                    height="160"
                    image={restaurantData.photo}
                    alt="Restaurant Image"
                />
                <CardContent>
                    <Typography noWrap>{restaurantData.name}</Typography>
                    <Grid container sx={{ mt: '10px' }}>
                        <Grid item xs={6}>
                            <Rating
                                value={restaurantData.avg_rating}
                                precision={0.5}
                                readOnly></Rating>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="right">
                                {restaurantData.review_count} Reviews
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography>{restaurantData.category}</Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography noWrap sx={{ ml: '10px' }}>
                                {restaurantData.location}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography align="right">
                                {restaurantData.pricing}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default RestaurantCard
