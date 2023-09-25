import {Actividad, Administrador} from "../database/models"

export default {
    listarActividad: async () => {
        return await Actividad.findAll({
            include: [
                {model : Administrador },
            ]
        });
    },
    agregarActividad: async (nuevoActividad) => {
        console.log(nuevoActividad);
        return await Actividad.create(nuevoActividad);
    },
    obtenerActividad: async (id) => {
        return await Actividad.findByPk(id, {
            include: [
                {model : Administrador}
            ]
        });
    },
    editarActividad: async (id, editActividad) => {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) return false;
        await Actividad.update(editActividad,{
            where: {
                id_actividad: id
            },
        });
        return true;
    },
    borrarActividad: async (id) => {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) return false;
        await Actividad.destroy({
            where: {
                id_actividad: id
            },
        });
        return true;
    },

    borrarActividadAdministrador: async (id) => {
        await Actividad.destroy({
            where: {
                id_administrador: id
            },
        });
        return true;
    },
};