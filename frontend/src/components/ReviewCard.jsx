import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Rating,
    Stack,
    TextField
} from '@mui/material'

const ReviewCard = props => {
    const review = props.review

    return (
        <Card elevation={3} sx={{ pt: '10px' }}>
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

            <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                disabled
                inputProps={{
                    style: { '-webkit-text-fill-color': '#000000' },
                    sx: { pr: '10px' }
                }}
                value={review.content}></TextField>
        </Card>
    )
}

export default ReviewCard
