import { useEffect, useState } from 'react'
import {
    Container,
    TextField,
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
    DialogContent,
    DialogActions,
    Link,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material'

import { useSelector } from 'react-redux'

const ReviewModal = props => {
    const userAuthentication = useSelector(state => state.auth)

    const [openModal, setOpenModal] = useState(false)
    const [submitDisable, setSubmitDisable] = useState(true)

    const [validateContent, setValidateContent] = useState('')
    const [content, setContent] = useState('')
    const [rating, setRating] = useState('')
    const [pricing, setPricing] = useState('')

    const handlePricingChange = (event, newPricing) => {
        setPricing(newPricing)
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
        content.length < 2000 && content.length > 1 && rating && pricing
            ? setSubmitDisable(false)
            : setSubmitDisable(true)
    }, [content, rating, pricing])

    useEffect(() => {
        console.log(submitDisable)
    }, [submitDisable])

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
                                        value={pricing}
                                        exclusive
                                        onChange={handlePricingChange}
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
