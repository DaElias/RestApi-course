const { Pool } = require("pg");
const boom = require("@hapi/boom");

const config = {
  host: "0.0.0.0",
  port: "5432",
  user: "nico",
  password: "admin123",
  database: "my_store",
};
const pool = new Pool(config);




module.exports = pool;
