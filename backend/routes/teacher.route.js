const mongoose = require('mongoose')
const {teacherModel} = require('../models/teacher.model')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const teacherRouter = express.Router()

teacherRouter.post('/register', async(req, res)=> {
    const {password} = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(hash){
               const teacher = new teacherModel({
                ...req.body,
                password: hash
               })
               await teacher.save()
               res.status(201).send({'message': 'teacher registered successfully'})
            }
        })
    } catch (error) {
        res.status(400).send({'error': error})
    }
})

teacherRouter.post('/login', async(req, res)=> {
    const {email, password} = req.body
    try {
        const teacher = await teacherModel.findOne({email})
        if(teacher){
            bcrypt.compare(password, teacher.password, (err, result)=> {
                if(result){
                    const token = jwt.sign({userID: teacher._id}, 'teacherAuth')
                    res.status(201).send({'message': 'teacher logged in successfully', 'token': token, 'username': teacher.username})
                }
                else{
                    res.status(201).send({'message': 'invaild credentials'})
                }
            })
        }
    } catch (error) {
        res.status(400).send({'message': error})
    }
})

module.exports = {
    teacherRouter
}