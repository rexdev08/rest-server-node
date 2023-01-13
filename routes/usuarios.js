import { Router } from "express";
import {
  notFound404,
  usuariosDelete,
  usuariosGet,
  usuariosPost,
  usuariosPut,
} from "../controllers/usuarios.js";
const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.delete("/", usuariosDelete);

router.get("*", notFound404);

export default router;
