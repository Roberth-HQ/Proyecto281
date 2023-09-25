import { Router } from "express";
import actividadController from "../controllers/actividad.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/actividad', actividadController.listar);
Route.post('/actividad', actividadController.agregar);
Route.get('/actividad/:id', actividadController.obtener);
Route.put('/actividad/:id', actividadController.editar);
Route.delete('/actividad/:id', actividadController.borrar);

export default Route;