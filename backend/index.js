const express = require('express')
const {connection} = require('./db')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const {userRouter} = require('./routes/user.route')
const { teacherRouter } = require('./routes/teacher.route')

app.use('/user', userRouter)
app.use('/teacher', teacherRouter)

app.listen(process.env.PORT, async()=> {
    try {
        console.log('connected to the db');
        await connection
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})