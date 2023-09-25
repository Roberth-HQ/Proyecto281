import evaluacionService from "../services/evaluacion.service";

export default {
  listar: async (req, res) => {
    try {
      const evaluaciones = await evaluacionService.listarEvaluacion();
      return res.status(200).json({ data: evaluaciones });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const evaluacion = await evaluacionService.obtenerEvaluacion(req.params.id);
      return res.status(200).json({ data: evaluacion });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const evaluacion = await evaluacionService.agregarEvaluacion(req.query);
      return res
        .status(201)
        .json({ message: "La evaluacion se ha agregado: ", data: evaluacion });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await evaluacionService.editarEvaluacion(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "La evaluacion se ha editado" });
      return res.status(404).json({ message: "La evaluacion no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await evaluacionService.borrarEvaluacion(req.params.id);
      if (can)
        return res.status(200).json({ message: "La evaluacion se ha borrado" });
      return res.status(404).json({ message: "La evaluacion no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
