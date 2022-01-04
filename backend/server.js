const express = require('express')
const cors = require('cors')

require('dotenv').config()

const userRouter = require('./routes/userRouter')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)

app.listen(4000, 'localhost')
console.log('API server running on http://localhost:4000/api')
