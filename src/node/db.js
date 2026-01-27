const { Pool } = require('pg');

const pool = new Pool({
  user: 'user_tomoya_shoji',
  host: 'localhost',
  database: 'db_tomoya_shoji',
  password: '5Rw5YDaWc5jc',
  port: 5432,
});

module.exports = pool;

