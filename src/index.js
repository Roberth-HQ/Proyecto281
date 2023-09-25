// IMPORTANDO MODULOS
import express from "express";
import dotenv from "dotenv";

import authRoute from "../src/routes/auth.routes.js";
import usuarioRoute from "../src/routes/usuario.routes.js";
import administradorRoute from "../src/routes/administrador.routes.js";
import usuario_normalRoute from "../src/routes/usuario_normal.routes.js";
import actividadRoute from "../src/routes/actividad.routes.js";
import recursoRoute from "../src/routes/recurso.routes.js";
import evaluacionRoute from "../src/routes/evaluacion.routes.js";
import institucion_ayudaRoute from "../src/routes/institucion_ayuda.routes.js";
import denunciaRoute from "../src/routes/denuncia.routes.js";
import contactoRoute from "../src/routes/contacto.routes.js";
import comentarioRoute from "../src/routes/comentario.routes.js";
import alertaRoute from "../src/routes/alerta.routes.js";
import rodrixRoute from "../src/routes/rodrix.routes.js";


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); 

// Habilitamos las rutas
// app.use("/api", authRoute); 
app.use("/api", usuarioRoute);
app.use("/api", administradorRoute);
app.use("/api", usuario_normalRoute);
app.use("/api", actividadRoute);
app.use("/api", recursoRoute);
app.use("/api", evaluacionRoute);
app.use("/api", institucion_ayudaRoute);
app.use("/api", denunciaRoute);
app.use("/api", contactoRoute);
app.use("/api", comentarioRoute);
app.use("/api", alertaRoute);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://127.0.0.1:${PORT}`);
});