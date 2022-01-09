const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

require('dotenv').config()

const userRouter = require('./routes/user-router')

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())
app.use(fileUpload())

app.use('/static', express.static('uploads'))

app.use('/api/user', userRouter)

app.listen(port, 'localhost')
console.log(`eat-valuate server running on http://localhost:${port}`)
