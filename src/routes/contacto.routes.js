import { Router } from "express";
import contactoController from "../controllers/contacto.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/contacto', contactoController.listar);
Route.post('/contacto', contactoController.agregar);
Route.get('/contacto/:id', contactoController.obtener);
Route.put('/contacto/:id', contactoController.editar);
Route.delete('/contacto/:id', contactoController.borrar);

export default Route;