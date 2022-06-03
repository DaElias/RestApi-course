const { Client }  = require("pg");
const boom = require("@hapi/boom");

const config = {
  host: "0.0.0.0",
  port: "5432",
  user: "nico",
  password: "admin123",
  database: "my_store",
};

const getConnection = async () => {
  const cliente = new Client(config);
  await cliente.connect().catch((e) => {
    throw boom.serverUnavailable("Error connect database");
  });
  return cliente;
};

module.exports  = getConnection;
