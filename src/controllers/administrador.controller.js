import administradorService from "../services/administrador.service";

export default {
  listar: async (req, res) => {
    try {
      const administradores =
        await administradorService.listarAdministrador();
      return res.status(200).json({ data: administradores });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const administrador = await administradorService.obtenerAdministrador(
        req.params.id
      );
      return res.status(200).json({ data: administrador });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const administrador = await administradorService.agregarAdministrador(
        req.query
      );
      return res
        .status(200)
        .json({
          message: "El administrador se ha agregado: ",
          data: administrador,
        });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await administradorService.editarAdministrador(
        req.params.id,
        req.query
      );
      if (can)
        return res
          .status(200)
          .json({ message: "El administrador se ha editado" });
      return res.status(404).json({ message: "El administrador no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await administradorService.borrarAdministrador(req.params.id);
      if (can)
        return res
          .status(200)
          .json({ message: "El administrador se ha borrado" });
      return res.status(404).json({ message: "El administrador no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
