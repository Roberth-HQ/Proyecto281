import {Alerta, Usuario} from "../database/models"

export default {
    listarAlerta: async () => {
        return await Alerta.findAll({
            include: [
                {model: Usuario}
            ]
        });
    },
    agregarAlerta: async (nuevoAlerta) => {
        let cur = new Date().toISOString()
        return await Alerta.create({
            fecha: cur,
            hora: cur,
            ubicacion: nuevoAlerta.ubicacion,
            descripcion_incidente: nuevoAlerta.descripcion_incidente,
            id_usuario: nuevoAlerta.id_usuario,
        });
    },
    obtenerAlerta: async (id) => {
        return await Alerta.findByPk(id, {
            include: [
                {model: Usuario}
            ]
        });
    },
    editarAlerta: async (id, editAlerta) => {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) return false;
        await Alerta.update(editAlerta,{
            where: {
                id_alerta: id
            },
        });
        return true;
    },
    borrarAlerta: async (id) => {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) return false;
        await Alerta.destroy({
            where: {
                id_alerta: id
            },
        });
        return true;
    },
    borrarAlertaUsuario: async (id) => {
        await Alerta.destroy({
            where: {
                id_usuario: id
            },
        });
        return true;
    },
    listarAlertaUsuario: async (id) => {
        const alertas = await Alerta.findAll({
            where: {
                id_usuario: id
            },
        });
        if (alertas) return true;
        return false;
    },
};