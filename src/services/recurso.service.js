import {Administrador, Recurso} from "../database/models"

export default {
    listarRecurso: async () => {
        return await Recurso.findAll({
            include: [
                {model: Administrador}
            ]
        });
    },
    agregarRecurso: async (nuevoRecurso) => {
        return await Recurso.create( nuevoRecurso );
    },
    obtenerRecurso: async (id) => {
        return await Recurso.findByPk(id, {
            include: [
                {model: Administrador}
            ]
        });
    },
    editarRecurso: async (id, editRecurso) => {
        const recurso = await Recurso.findByPk(id);
        if (!recurso) return false;
        await Recurso.update(editRecurso,{
            where: {
                id_recurso: id
            },
        });
        return true;
    },
    borrarRecurso: async (id) => {
        const recurso = await Recurso.findByPk(id);
        if (!recurso) return false;
        await Recurso.destroy({
            where: {
                id_recurso: id
            },
        });
        return true;
    },

    borrarRecursoAdministrador: async (id) => {
        await Recurso.destroy({
            where: {
                id_administrador: id
            },
        });
        return true;
    },
};