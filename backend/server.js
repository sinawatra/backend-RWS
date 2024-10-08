const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const port = process.env.PORT 
const app = express()

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/SoilMoisture', require('./routes/dataRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))