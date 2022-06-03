const express = require("express");
const { RouterApi } = require(".././router");
const { boomHandleError } = require(".././middleware/error.handle");
const cors = require("cors");

class Server {
  #port;
  #whiteList;
  #app;
  #corsOptions;
  constructor() {
    this.#app = express();
    this.#port = 3000;
    this.#whiteList = [
      `http://localhost:${this.#port}`,
      "http://explampleweb.cow",
      "http://127.0.0.1:5500",
    ];
    this.#corsOptions = {
      origin: (origin, callback) => {
        if (this.#whiteList.includes(origin)) {
          callback(null, true);
        }
        callback(new Error("Url no permitida!!"));
      },
    };
    this.#middleware();
  }
  #connectDatabase() {}
  #middleware() {
    //* #app.use(cors(corsOptions));
    this.#app.use(cors());
    //* lectura y parceo del body
    this.#app.use(express.json());
    // this.#app.use(express.static("../public"));
    //* Rutas de la api
    RouterApi(this.#app);
    // * Manejo de errores con boom
    this.#app.use(boomHandleError);
  }
  listener() {
    //* Corremos el server
    this.#app.listen(this.#port, () => {
      console.log(`running in http://localhost:${this.#port}/`);
    });
  }
}

module.exports = Server;
