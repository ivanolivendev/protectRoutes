require('dotenv').config();


const pool = require('../database/pool')



const getAll = async (req,res) =>{
      

   try {

     console.log("Passou")

     const users = await pool('users').select('*');
     console.log(users);
    
    return console.log('conectou')
    
   } catch (error) {
    console.log("*******************************")
    console.log(error)
    console.log("*******************************")
   }

}

module.exports = {getAll}