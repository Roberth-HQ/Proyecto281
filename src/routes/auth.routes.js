// rutas para poder validar a los usuarios
import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const Route = Router()

//Declaramos los endpoints
Route.get('/auth/login', authController.login);
Route.get('/auth/registro', authController.registro);
Route.get('/auth/perfil', authController.perfil);
Route.get('/auth/logout', authController.logout);

export default Route;