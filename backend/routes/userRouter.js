const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

router.get('/:id', userController.getUserById)
router.post('/register', userController.createUser)

module.exports = router
