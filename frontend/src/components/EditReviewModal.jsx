import { useEffect, useState } from 'react'
import {
    Container,
    TextField,
    Button,
    Typography,
    Grid,
    Rating,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import { useDispatch } from 'react-redux'

import { useEditReviewMutation } from '../api/reviews'
import { createToast } from '../app/slices/toast'

const EditReviewModal = props => {
    const [editReview] = useEditReviewMutation()
    const dispatch = useDispatch()

    const restaurant_id = props.restaurant_id
    const userAuthentication = props.user
    const review = props.review

    const [validateContent, setValidateContent] = useState('')
    const [content, setContent] = useState(review.content)
    const [rating, setRating] = useState(review.rating)
    const [price, setPrice] = useState(review.price)

    const handleSubmit = () => {
        editReview({
            id: review.id,
            content: content,
            rating: rating,
            price: price
        })
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
                        message: 'Review Edited!'
                    })
                )
                props.onClose(false)
            })
    }

    const handleContentChange = event => {
        if (event.target.value.length > 2000) {
            setValidateContent('Text is over 2000 characters')
        } else {
            setContent(event.target.value)
            setValidateContent('')
        }
    }

    return (
        <Container maxWidth="md" sx={{ mt: '50px' }}>
            <Dialog
                onClose={() => {
                    props.onClose(false)
                }}
                open={props.open}
                fullWidth
                maxWidth="md">
                <DialogTitle>
                    <Typography variant="h5">Edit your review!</Typography>
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            multiline
                            rows={10}
                            value={content}
                            onChange={handleContentChange}
                            error={Boolean(validateContent)}
                            FormHelperTextProps={{ error: true }}
                            helperText={
                                validateContent ? validateContent : ''
                            }></TextField>

                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h5" sx={{ mr: '10px' }}>
                                    Rating
                                </Typography>

                                <Rating
                                    value={rating}
                                    size="large"
                                    precision={0.5}
                                    onChange={(event, newRating) => {
                                        setRating(newRating)
                                    }}
                                    sx={{ mt: '10px' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h5" sx={{ mr: '10px' }}>
                                    Pricing
                                </Typography>
                                <ToggleButtonGroup
                                    value={price}
                                    exclusive
                                    onChange={(event, newPrice) => {
                                        setPrice(newPrice)
                                    }}
                                    size="small"
                                    sx={{ mt: '10px' }}>
                                    <ToggleButton
                                        value="$"
                                        sx={{ width: '80px' }}>
                                        $
                                    </ToggleButton>
                                    <ToggleButton
                                        value="$$"
                                        sx={{ width: '80px' }}>
                                        $$
                                    </ToggleButton>
                                    <ToggleButton
                                        value="$$$"
                                        sx={{ width: '80px' }}>
                                        $$$
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ color: '#ffffff' }}>
                        Submit Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default EditReviewModal
