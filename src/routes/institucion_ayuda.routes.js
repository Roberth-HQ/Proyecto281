import { Router } from "express";
import institucion_ayudaController from "../controllers/institucion_ayuda.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/institucion_ayuda', institucion_ayudaController.listar);
Route.post('/institucion_ayuda', institucion_ayudaController.agregar);
Route.get('/institucion_ayuda/:id', institucion_ayudaController.obtener);
Route.put('/institucion_ayuda/:id', institucion_ayudaController.editar);
Route.delete('/institucion_ayuda/:id', institucion_ayudaController.borrar);

export default Route;