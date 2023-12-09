const express = require('express')
const route = express()
const {getAll} = require('../model/models')

route.get("/", getAll)




module.exports = route