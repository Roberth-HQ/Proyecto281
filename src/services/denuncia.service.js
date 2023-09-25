import {Denuncia, Usuario} from "../database/models"
import models from "../database/models"

export default {
    listarDenuncia: async () => {
        return await models.Denuncia.findAll({
            include: [
                {model : Usuario}
            ]
        });
    },
    agregarDenuncia: async (nuevoDenuncia) => {
        return await Denuncia.create({
            nombre_victima: nuevoDenuncia.nombre_victima,
            nombre_agresor: nuevoDenuncia.nombre_agresor,
            tipo_violencia: nuevoDenuncia.tipo_violencia,
            tipo_denuncia: nuevoDenuncia.tipo_denuncia,
            fecha: new Date().toISOString(),
            descripcion: nuevoDenuncia.descripcion,
            pruebas: nuevoDenuncia.pruebas,
            ubicacion: nuevoDenuncia.ubicacion,
            estado: nuevoDenuncia.estado,
            id_usuario: nuevoDenuncia.id_usuario,
        });
    },
    obtenerDenuncia: async (id) => {
        return await Denuncia.findByPk(id, {
            include: [
                {model : Usuario}
            ]
        });
    },
    editarDenuncia: async (id, editDenuncia) => {
        const denuncia = await Denuncia.findByPk(id);
        if (!denuncia) return false;
        await Denuncia.update(editDenuncia,{
            where: {
                id_denuncia: id
            },
        });
        return true;
    },
    borrarDenuncia: async (id) => {
        const denuncia = await Denuncia.findByPk(id);
        if (!denuncia) return false;
        await Denuncia.destroy({
            where: {
                id_denuncia: id
            },
        });
        return true;
    },

    borrarDenunciaUsuario: async (id) => {
        await Denuncia.destroy({
            where: {
                id_usuario: id
            },
        });
        return true;
    },
    listarDenunciaUsuario: async (id) => {
        await Denuncia.destroy({
            where: {
                id_usuario: id
            },
        });
        return true;
    },
};