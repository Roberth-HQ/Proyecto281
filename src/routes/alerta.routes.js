import { Router } from "express";
import alertaController from "../controllers/alerta.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/alerta', alertaController.listar);
Route.post('/alerta', alertaController.agregar);
Route.get('/alerta/:id', alertaController.obtener);
Route.put('/alerta/:id', alertaController.editar);
Route.delete('/alerta/:id', alertaController.borrar);

export default Route;