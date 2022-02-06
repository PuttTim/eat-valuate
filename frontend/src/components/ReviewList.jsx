import { useEffect, useState } from 'react'
import { Container, Typography, Divider, Grid, Card } from '@mui/material'
import ReviewCard from '../components/ReviewCard'

import { useGetReviewByRestaurantIdQuery } from '../api/reviews'

const ReviewList = props => {
    const {
        data: reviewsData = [],
        isLoading,
        error
    } = useGetReviewByRestaurantIdQuery(props.restaurant_id)

    return (
        <Container maxWidth="md" sx={{ mt: '50px', mb: '50px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3">
                        Reviews
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" sx={{ borderBottomWidth: 5 }} />
                </Grid>
                <Grid item xs={12}>
                    {isLoading != true ? (
                        reviewsData.length > 0 ? (
                            <Grid container spacing={3}>
                                {reviewsData.map((review, index) => {
                                    return (
                                        <Grid item xs={12} key={index}>
                                            <ReviewCard
                                                review={review}
                                                user={props.user}
                                            />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        ) : (
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Card
                                        elevation={3}
                                        sx={{ pt: '10px', pb: '20px' }}>
                                        <Typography variant="h5" align="center">
                                            No Reviews Yet..
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        )
                    ) : (
                        <></>
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}

export default ReviewList
