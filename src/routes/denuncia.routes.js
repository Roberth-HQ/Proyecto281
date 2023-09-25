import { Router } from "express";
import denunciaController from "../controllers/denuncia.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/denuncia', denunciaController.listar);
Route.post('/denuncia', denunciaController.agregar);
Route.get('/denuncia/:id', denunciaController.obtener);
Route.put('/denuncia/:id', denunciaController.editar);
Route.delete('/denuncia/:id', denunciaController.borrar);

export default Route;