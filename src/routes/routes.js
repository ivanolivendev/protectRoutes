const express = require('express')
const route = express()
const {getAll,registerUser,login} = require('../model/models')
const verify = require('../middleware/middleware')

route.get("/", getAll)
route.post("/register",registerUser)
route.post("/login",login)
route.get("/protected1",verify, getAll)
route.get("/protected2", getAll)
route.get("/protected3", getAll)




module.exports = route