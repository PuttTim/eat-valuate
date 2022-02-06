import { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Rating,
    Stack,
    TextField,
    IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useDispatch } from 'react-redux'

import { useDeleteReviewMutation } from '../api/reviews'
import { createToast } from '../app/slices/toast'

import EditReviewModal from '../components/EditReviewModal'

const ReviewCard = props => {
    const review = props.review
    const user = props.user

    const [deleteReview] = useDeleteReviewMutation()
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false)

    const handleDelete = () => {
        deleteReview(review.id)
            .unwrap()
            .then(response => {
                dispatch(
                    createToast({
                        open: true,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        severity: 'success',
                        message: 'Review Deleted!'
                    })
                )
            })
    }

    return (
        <Card elevation={3} sx={{ pt: '10px' }}>
            <EditReviewModal
                review={review}
                open={openModal}
                onClose={() => {
                    setOpenModal(false)
                }}
            />
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h4" sx={{ ml: '10px' }}>
                        {review.username}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={1}
                    sx={{ display: 'flex', justifyContent: 'right' }}>
                    {user.userData.username == review.username ? (
                        <Stack direction="row" spacing={1}>
                            <IconButton
                                onClick={() => {
                                    setOpenModal(true)
                                }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    ) : (
                        <></>
                    )}
                </Grid>
                <Grid
                    item
                    xs={3}
                    sx={{ display: 'flex', justifyContent: 'right' }}>
                    <Stack>
                        <Rating
                            value={review.rating}
                            size="large"
                            precision={0.5}
                            readOnly
                        />
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
                    style: { WebkitTextFillColor: '#000000' },
                    sx: { pr: '10px' }
                }}
                value={review.content}></TextField>
        </Card>
    )
}

export default ReviewCard
