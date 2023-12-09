const express = require('express')
const route = express()

route.get("/",(req,res)=>{console.log("Passou na rota k ")})




module.exports = route