const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    role: String
})

const teacherModel = mongoose.model('teacher', teacherSchema)

module.exports = {
    teacherModel
}