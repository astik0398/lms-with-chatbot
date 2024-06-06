const {userModel} = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')

const userRouter = express.Router()

userRouter.post('/register', async(req, res)=> {
    const {password} = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(hash){
                const user = new userModel({
                    ...req.body,
                    password: hash
                })
                await user.save()
                res.status(201).send('user has been registered successfully')
            }
        })
    } catch (error) {
        res.status(400).send({'error': error})
    }
})

userRouter.post('/login', async(req, res)=> {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                if(result){
                    const token = jwt.sign({userID: user._id}, 'authentication')
                    res.status(201).send({"message": "user logged in successfully", "token": token, "username": user.username})
                }
                else{
                    res.status(201).send({"message": "invalid credentials"})
                }
            })
        }
    } catch (error) {
        res.status(400).send({"message": error})
    }
})

module.exports = {
    userRouter
}