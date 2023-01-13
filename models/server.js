import express from "express";
import cors from "cors";
import router from "../routes/usuarios.js";

class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Routas de mi aplicacion
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parseo y lectura del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor escuchando en: ", this.port);
    });
  }
}

export default server;
