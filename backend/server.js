const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

require('dotenv').config()

const userRouter = require('./routes/user-router')
const restaurantRouter = require('./routes/restaurant-router')
const reviewRouter = require('./routes/review-router')
const bookmarkRouter = require('./routes/bookmark-router')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.use(fileUpload())

app.use('/static', express.static('uploads'))

// Routing goes through /api/{router name} to simplify things when dealing with react on the same port of 4000.
app.use('/api/user', userRouter)
app.use('/api/restaurant', restaurantRouter)
app.use('/api/review', reviewRouter)
app.use('/api/bookmark', bookmarkRouter)

app.listen(port, 'localhost')
console.log(`eat-valuate server running on http://localhost:${port}`)
