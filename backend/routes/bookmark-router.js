const express = require('express')
const bookmarkController = require('../controllers/bookmark-controller')

const router = express.Router()

router.post('/create', bookmarkController.createBookmark)
router.get('/user/:user_id', bookmarkController.getUserBookmarkedRestaurants)
router.delete('/delete', bookmarkController.deleteBookmark)

module.exports = router
