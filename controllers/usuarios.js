import { response, request } from "express";

const usuariosGet = (req, res = response) => {

    const {q, nombre = "No name", apikey} = req.query

  res.json({ ok: true, msg: "get API - controlador", q, nombre, apikey });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;

  res.json({ ok: true, msg: "post API - usuariosPost", nombre, edad });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;

  res.status(500).json({ ok: true, msg: "put API - controlador", id });
};

const usuariosDelete = (req, res = response) => {
  res.json({ ok: true, msg: "delete API - controlador" });
};

const notFound404 = (req, res = response) => {
  res.status(404).send("Page not found");
};

export { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, notFound404 };
