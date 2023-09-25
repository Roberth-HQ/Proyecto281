import { Router } from "express";
import evaluacionController from "../controllers/evaluacion.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/evaluacion', evaluacionController.listar);
Route.post('/evaluacion', evaluacionController.agregar);
Route.get('/evaluacion/:id', evaluacionController.obtener);
Route.put('/evaluacion/:id', evaluacionController.editar);
Route.delete('/evaluacion/:id', evaluacionController.borrar);

export default Route;