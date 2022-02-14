const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')


const app = express();

//connecting database
connectDB()

//bodyParser
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(()=>errorHandler)

app.listen(port, ()=> console.log(`Server started on ${port}`))