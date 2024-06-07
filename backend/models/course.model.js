const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    level: String,
    duration: String,
    language: String,
    instructor: String,
    thumbnail: String,
    price: String,
    enrolledStudents: String,
    launchedOn:  String
})

const courseModel = mongoose.model('course', courseSchema)

module.exports = {
    courseModel
}