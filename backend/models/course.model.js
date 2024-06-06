const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    id: String,
    title: String,
    description: String,
    category: String,
    level: String,
    duration: String,
    language: String,
    instructor: String,
    thumbnail: String
})

const courseModel = mongoose.model('course', courseSchema)

module.exports = {
    courseModel
}