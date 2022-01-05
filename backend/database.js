const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "600ibracadabra",
  database: "iot"
});

pool.connect();

module.exports = pool;
