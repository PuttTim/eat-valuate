const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

router.get('/:id', userController.getUserById)
router.post('/login', userController.loginUser)
router.post('/register', userController.createUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router
