import denunciaService from "../services/denuncia.service";

export default {
  listar: async (req, res) => {
    try {
      const denuncias = await denunciaService.listarDenuncia();
      return res.status(200).json({ data: denuncias });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const denuncia = await denunciaService.obtenerDenuncia(req.params.id);
      return res.status(200).json({ data: denuncia });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const denuncia = await denunciaService.agregarDenuncia(req.query);
      return res
        .status(201)
        .json({ message: "La denuncia se ha agregado: ", data: denuncia });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await denunciaService.editarDenuncia(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "La denuncia se ha editado" });
      return res.status(404).json({ message: "La denuncia no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await denunciaService.borrarDenuncia(req.params.id);
      if (can)
        return res.status(200).json({ message: "La denuncia se ha borrado" });
      return res.status(404).json({ message: "La denuncia no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
