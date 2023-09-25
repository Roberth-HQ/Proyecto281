import { Router } from "express";
import recursoController from "../controllers/recurso.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/recurso', recursoController.listar);
Route.post('/recurso', recursoController.agregar);
Route.get('/recurso/:id', recursoController.obtener);
Route.put('/recurso/:id', recursoController.editar);
Route.delete('/recurso/:id', recursoController.borrar);

export default Route;