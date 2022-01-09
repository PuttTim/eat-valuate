const express = require('express')
const reviewController = require('../controllers/review-controller')

const router = express.Router()

router.post('/create', reviewController.createReview)
router.get('/restaurant/:restaurant_id', reviewController.getRestaurantReviews)
router.get('/user/:user_id', reviewController.getUserReviews)
router.get('/:id', reviewController.getReviewById)
router.delete('/delete/:id', reviewController.deleteReview)
router.put('/edit/:id', reviewController.updateReview)

module.exports = router
