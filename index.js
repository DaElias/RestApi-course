import express from "express";
import { RouterApi } from "./router";
import { boomHandleError } from "./middleware/error.handle";
// import cors from "cors";
const app = express();
const port = 3000;

//* instaciomos los routers
// app.use(cors());
app.use(express.json()); // lectura y parceo del body
RouterApi(app);
app.use(boomHandleError); // * Manejo de errores con boom
//* Corremos el server
app.listen(port, () => {
  console.log(`running in http://localhost:${port}/`);
});
