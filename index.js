import express from "express";
import { RouterApi } from "./router";
import { boomHandleError } from "./middleware/error.handle";
import cors from "cors";
const app = express();
const port = 3000;

// * Add cors
const whiteList = [
  `http://localhost:${port}`,
  "http://explampleweb.cow",
  "http://127.0.0.1:5500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    }
    callback(new Error("Url no permitida!!"));
  },
};
// app.use(cors(corsOptions));
app.use(cors());
// lectura y parceo del body
app.use(express.json());
// app.use(express.static("../public"));
//* Rutas de la api
RouterApi(app);

// * Manejo de errores con boom
app.use(boomHandleError);

//* Corremos el server
app.listen(port, () => {
  console.log(`running in http://localhost:${port}/`);
});
