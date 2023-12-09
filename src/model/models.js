require('dotenv').config();

const pool = require('../database/pool')

const getAll = async (req,res) =>{
      

    try {
    const query = `select * from users`
    const result = await pool.query(query)

   return res.status(200).json({msg: `${result}`})
    } catch (error) {

        console.log(error.message)
        return res.status(400).json({msg: `Não Foi Possível Executar`})
        
    }

}

module.exports = {getAll}