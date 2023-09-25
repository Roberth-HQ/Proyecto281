import recursoService from "../services/recurso.service";

export default {
  listar: async (req, res) => {
    try {
      const recursos = await recursoService.listarRecurso();
      return res.status(200).json({ data: recursos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const recurso = await recursoService.obtenerRecurso(req.params.id);
      return res.status(200).json({ data: recurso });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const recurso = await recursoService.agregarRecurso(req.query);
      return res
        .status(201)
        .json({ message: "El recurso se ha agregado: ", data: recurso });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await recursoService.editarRecurso(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "El recurso se ha editado" });
      return res.status(404).json({ message: "El recurso no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await recursoService.borrarRecurso(req.params.id);
      if (can)
        return res.status(200).json({ message: "El recurso se ha borrado" });
      return res.status(404).json({ message: "El recurso no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
