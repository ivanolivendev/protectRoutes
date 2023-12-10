require('dotenv').config();

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE


const pool = require('knex')({
  client: 'pg',
  connection: {
    host,
    port : 3306,
    user ,
    password,
    database,
    ssl: { rejectUnauthorized: false }     
  }
 
});




module.exports = pool


