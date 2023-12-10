require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const pool = require('knex')({
  client: 'pg',
  connection: {
    host,
    port: 5432, // Ajuste para a porta padrão do PostgreSQL
    user,
    password,
    database,
    ssl: { rejectUnauthorized: false } // Certifique-se de entender as implicações
  },
  pool: {
    min: 2, // Número mínimo de conexões no pool
    max: 10, // Número máximo de conexões no pool
  }
});

module.exports = pool;


