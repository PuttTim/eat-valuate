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

import { useCreateReviewMutation } from '../api/reviews'
import { createToast } from '../app/slices/toast'

const ReviewModal = props => {
    const [createReview] = useCreateReviewMutation()
    const dispatch = useDispatch()

    const restaurant_id = props.restaurant_id
    const userAuthentication = props.user

    const [openModal, setOpenModal] = useState(false)
    const [submitDisable, setSubmitDisable] = useState(true)

    const [validateContent, setValidateContent] = useState('')
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    const [price, setPrice] = useState('')

    const handleSubmit = () => {
        createReview({
            user_id: userAuthentication.userData.id,
            restaurant_id: restaurant_id,
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
                        message: 'Review Created!'
                    })
                )
                setOpenModal(false)
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
    useEffect(() => {
        content.length < 2000 && content.length > 1 && rating && price
            ? setSubmitDisable(false)
            : setSubmitDisable(true)
    }, [content, rating, price])

    return (
        <>
            <Container maxWidth="md" sx={{ mt: '50px' }}>
                <Dialog
                    onClose={() => {
                        setOpenModal(false)
                    }}
                    open={openModal}
                    fullWidth
                    maxWidth="md">
                    <DialogTitle>
                        <Typography variant="h5">Write your review!</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                multiline
                                rows={10}
                                onChange={handleContentChange}
                                error={Boolean(validateContent)}
                                FormHelperTextProps={{ error: true }}
                                helperText={
                                    validateContent ? validateContent : ''
                                }></TextField>

                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h5"
                                        sx={{ mr: '10px' }}>
                                        Rating
                                    </Typography>

                                    <Rating
                                        size="large"
                                        precision={0.5}
                                        onChange={(event, newRating) => {
                                            setRating(newRating)
                                        }}
                                        sx={{ mt: '10px' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h5"
                                        sx={{ mr: '10px' }}>
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
                            disabled={submitDisable}
                            onClick={handleSubmit}
                            sx={{ color: '#ffffff' }}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!userAuthentication.authenticated}
                    onClick={() => {
                        setOpenModal(true)
                    }}
                    sx={{ color: '#ffffff' }}>
                    Create a Review
                </Button>
            </Container>
        </>
    )
}

export default ReviewModal
