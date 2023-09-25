import usuario_normalService from "../services/usuario_normal.service";

export default {
  listar: async (req, res) => {
    try {
      const usuarios_normal =
        await usuario_normalService.listarUsuario_normal();
      return res.status(200).json({ data: usuarios_normal });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const usuario_normal = await usuario_normalService.agregarUsuario_normal(
        req.query
      );
      return res
        .status(200)
        .json({
          message: "El Usuario_normal se ha agregado",
          data: usuario_normal,
        });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const usuario_normal = await usuario_normalService.obtenerUsuario_normal(
        req.params.id
      );
      return res.status(200).json({ data: usuario_normal });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await usuario_normalService.editarUsuario_normal(
        req.params.id,
        req.query
      );
      if (can)
        return res
          .status(200)
          .json({ message: "El Usuario_normal se ha editado" });
      return res.status(404).json({ message: "El Usuario_normal no existe " });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await usuario_normalService.borrarUsuario_normal(req.params.id);
      if (can)
        return res
          .status(200)
          .json({ message: "El Usuario_normal se ha borrado" });
      return res.status(404).json({ message: "El Usuario_normal no existe " });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
