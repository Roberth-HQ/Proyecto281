import { Router } from "express";
import comentarioController from "../controllers/comentario.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/comentario', comentarioController.listar);
Route.post('/comentario', comentarioController.agregar);
Route.get('/comentario/:id', comentarioController.obtener);
Route.put('/comentario/:id', comentarioController.editar);
Route.delete('/comentario/:id', comentarioController.borrar);

export default Route;