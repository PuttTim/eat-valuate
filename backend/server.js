const express = require('express')
const cors = require('cors')

require('dotenv').config()

const userRouter = require('./routes/user-router')

const app = express()

const port = 4000

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)

app.listen(port, 'localhost')
console.log(`API server running on http://localhost:${port}/api`)
