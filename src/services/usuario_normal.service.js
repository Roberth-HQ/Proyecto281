import {Usuario, Usuario_normal} from "../database/models"
import usuarioService from "./usuario.service";

export default {
    listarUsuario_normal: async () => {
        return await Usuario_normal.findAll({
            include: [
                {model : Usuario}
            ]
        });
    },
    agregarUsuario_normal: async (nuevoUsuario_normal) => {
        return await Usuario_normal.create({
            id_usuario: nuevoUsuario_normal.id_usuario,
            estado: nuevoUsuario_normal.estado,
            fecha_registro: new Date().toISOString(),
            id_administrador: nuevoUsuario_normal.id_administrador,
        });
    },
    obtenerUsuario_normal: async (id) => {
        return await Usuario_normal.findByPk(id, {
            include: [
                {model: Usuario}
            ]
        });
    },
    editarUsuario_normal: async (id, editUsuario_normal) => {
        const usuario_normal = await Usuario_normal.findByPk(id);
        if (!usuario_normal) return false;
        await Usuario_normal.update(editUsuario_normal,{
            where: {
                id_usuario: id
            },
        });
        return true;
    },
    borrarUsuario_normal: async (id) => {
        const usuario_normal = await Usuario_normal.findByPk(id);
        if (!usuario_normal) return false;
        usuarioService.borrarUsuario(id);
        await Usuario_normal.destroy({
            where: {
                id_usuario: id
            },
        });
        return true;
    },
};