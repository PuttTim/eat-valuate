import React from 'react'
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

const ReviewCard = props => {
    const review = props.review

    return (
        <Card elevation={3} sx={{ pt: '10px', pb: '20px' }}>
            <Grid container>
                <Grid item xs={9}>
                    <Typography variant="h4" sx={{ ml: '10px' }}>
                        {review.username}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{ display: 'flex', justifyContent: 'right' }}>
                    <Stack>
                        <Rating value={review.rating} readOnly size="large" />
                        <Typography sx={{ pr: '10px' }}>
                            Posted at {review.posted_at.split('T')[0]}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>

            <Card variant="outlined" sx={{ ml: '10px', mr: '10px' }}>
                <Typography paragraph sx={{ ml: '10px', mt: '10px' }}>
                    {review.content}
                </Typography>
            </Card>
        </Card>
    )
}

export default ReviewCard
