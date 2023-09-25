import { Router } from "express";

import usuario_normalController from "../controllers/usuario_normal.controller";

const Route = Router();

Route.get("/usuario_normal", usuario_normalController.listar);
Route.post("/usuario_normal", usuario_normalController.agregar);
Route.get("/usuario_normal/:id", usuario_normalController.obtener);
Route.put("/usuario_normal/:id", usuario_normalController.editar);
Route.delete("/usuario_normal/:id", usuario_normalController.borrar);

export default Route;