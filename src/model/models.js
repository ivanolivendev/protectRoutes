require('dotenv').config();

const pool = require('../database/pool')

const getAll = async (req,res) =>{
      

    console.log("Passou")

   try {
    const result = pool.query('select * from usuarios')
   } catch (error) {
    console.log(error.message)
   }

}

module.exports = {getAll}