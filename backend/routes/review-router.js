const express = require('express')
const reviewController = require('../controllers/review-controller')

const router = express.Router()

router.post('/create', reviewController.createReview)

module.exports = router
