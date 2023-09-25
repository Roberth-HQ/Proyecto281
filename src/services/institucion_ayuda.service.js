import {Administrador, Institucion_Ayuda} from "../database/models"

export default {
    listarInstitucion_Ayuda: async () => {
        return await Institucion_Ayuda.findAll({
            include: [
                {model: Administrador}
            ]
        });
    },
    agregarInstitucion_Ayuda: async (nuevoInstitucion_Ayuda) => {
        return await Institucion_Ayuda.create(nuevoInstitucion_Ayuda);
    },
    obtenerInstitucion_Ayuda: async (id) => {
        return await Institucion_Ayuda.findByPk(id, {
            include: [
                {model: Administrador}
            ]
        });
    },
    editarInstitucion_Ayuda: async (id, editInstitucion_Ayuda) => {
        const institucion_ayuda = await Institucion_Ayuda.findByPk(id);
        if (!institucion_ayuda) return false;
        await Institucion_Ayuda.update(editInstitucion_Ayuda,{
            where: {
                id_inst_ayuda: id
            },
        });
        return true;
    },
    borrarInstitucion_Ayuda: async (id) => {
        const institucion_ayuda = await Institucion_Ayuda.findByPk(id);
        if (!institucion_ayuda) return false;
        await Institucion_Ayuda.destroy({
            where: {
                id_inst_ayuda: id
            },
        });
        return true;
    },
    borrarInstitucion_AyudaAdministrador: async (id) => {
        await Institucion_Ayuda.destroy({
            where: {
                id_administrador: id
            },
        });
        return true;
    },
};