const {courseModel} = require('../models/course.model')
const express = require('express')
const courseRouter = express.Router()

courseRouter.post('/addCourse', async(req, res)=> {
    try {
        const course = new courseModel({
            ...req.body,
            launchedOn: new Date().toString()
        })
        await course.save()
        res.status(201).send({'message': 'course created successfully', 'course_details': course})
    } catch (error) {
        res.status(400).send({'message': error})
    }
})

courseRouter.get('/', async(req, res)=> {
    try {
        const courses = await courseModel.find()
        res.status(201).send(courses)
    } catch (error) {
        res.status(400).send({'message': error})
    }
})

module.exports = {
    courseRouter
}