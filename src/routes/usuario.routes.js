import { Router } from "express";
import usuarioController from "../controllers/usuario.controller";

const Route = Router()

//declaramos los endpoints
Route.get('/usuario', usuarioController.listar);
Route.post('/usuario', usuarioController.agregar);
Route.get('/usuario/:id', usuarioController.obtener);
Route.put('/usuario/:id', usuarioController.editar);
Route.delete('/usuario/:id', usuarioController.borrar);

export default Route;