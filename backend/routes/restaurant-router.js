const express = require('express')
const restaurantController = require('../controllers/restaurant-controller')

const router = express.Router()

router.get('/', restaurantController.getAllRestaurants)
router.get('/:id', restaurantController.getRestaurantById)

module.exports = router
