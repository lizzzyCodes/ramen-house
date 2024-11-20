const { Pool } = require("pg");
const config = require('./ config/core');


const pool = new Pool({
  user: 'your_user',      // Your Postgres username
  host: 'localhost',      // Your Postgres host
  database: 'your_db',    // Your Postgres database
  password: 'your_password', // Your Postgres password
  port: 5432,             // Default Postgres port
});

module.exports = pool