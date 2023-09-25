import actividadService from "../services/actividad.service";

export default {
  listar: async (req, res) => {
    try {
      const actividades = await actividadService.listarActividad();
      return res.status(200).json({ data: actividades });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const actividad = await actividadService.obtenerActividad(req.params.id);
      return res.status(200).json({ data: actividad });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const actividad = await actividadService.agregarActividad(req.query);
      return res
        .status(201)
        .json({ message: "La actividad se ha agregado: ", data: actividad });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await actividadService.editarActividad(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "La actividad se ha editado" });
      return res.status(404).json({ message: "La actividad no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await actividadService.borrarActividad(req.params.id);
      if (can)
        return res.status(200).json({ message: "La actividad se ha borrado" });
      return res.status(404).json({ message: "La actividad no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
