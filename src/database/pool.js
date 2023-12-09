require('dotenv').config();
const {Pool} = require('pg')

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
    },
  });


module.exports=pool


