import { Router } from "express";
import administradorController from "../controllers/administrador.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/administrador', administradorController.listar);
Route.post('/administrador', administradorController.agregar);
Route.get('/administrador/:id', administradorController.obtener);
Route.put('/administrador/:id', administradorController.editar);
Route.delete('/administrador/:id', administradorController.borrar);

export default Route;