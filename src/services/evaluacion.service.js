import {Evaluacion} from "../database/models"
import evaluacionService from "./evaluacion.service";

export default {
    listarEvaluacion: async () => {
        return await Evaluacion.findAll({
            include: [
                
            ]
        });
    },
    agregarEvaluacion: async (nuevoEvaluacion) => {
        return await Evaluacion.create({
            id_evaluacion: nuevoEvaluacion.id_evaluacion,
            estado: nuevoEvaluacion.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoEvaluacion.id_administrador,
        });
    },
    obtenerEvaluacion: async (id) => {
        return await Evaluacion.findByPk(id, {
            include: [
                
            ]
        });
    },
    editarEvaluacion: async (id, editEvaluacion) => {
        const evaluacion = await Evaluacion.findByPk(id);
        if (!evaluacion) return false;
        await Evaluacion.update(editEvaluacion,{
            where: {
                id_evaluacion: id
            },
        });
        return true;
    },
    borrarEvaluacion: async (id) => {
        const evaluacion = await Evaluacion.findByPk(id);
        if (!evaluacion) return false;
        await Evaluacion.destroy({
            where: {
                id_evaluacion: id
            },
        });
        return true;
    },
};