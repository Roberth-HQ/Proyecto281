import usuarioService from "../services/usuario.service";

export default {
  listar: async (req, res) => {
    try {
      const usuarios = await usuarioService.listarUsuario();
      return res.status(200).json({ data: usuarios });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const usuario = await usuarioService.obtenerUsuario(req.params.id);
      return res.status(200).json({ data: usuario });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const usuario = await usuarioService.agregarUsuario(req.query);
      return res
        .status(201)
        .json({ message: "El usuario se ha agregado: ", data: usuario });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await usuarioService.editarUsuario(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "El usuario se ha editado" });
      return res.status(404).json({ message: "El usuario no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await usuarioService.borrarUsuario(req.params.id);
      if (can)
        return res.status(200).json({ message: "El usuario se ha borrado" });
      return res.status(404).json({ message: "El usuario no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
