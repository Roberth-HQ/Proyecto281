import institucion_ayudaService from "../services/institucion_ayuda.service";

export default {
  listar: async (req, res) => {
    try {
      const instituciones_ayuda = await institucion_ayudaService.listarInstitucion_Ayuda();
      return res.status(200).json({ data: instituciones_ayuda });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const institucion_ayuda = await institucion_ayudaService.obtenerInstitucion_Ayuda(req.params.id);
      return res.status(200).json({ data: institucion_ayuda });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const institucion_ayuda = await institucion_ayudaService.agregarInstitucion_Ayuda(req.query);
      return res
        .status(201)
        .json({ message: "La institucion_ayuda se ha agregado: ", data: institucion_ayuda });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await institucion_ayudaService.editarInstitucion_Ayuda(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "La institucion_ayuda se ha editado" });
      return res.status(404).json({ message: "La institucion_ayuda no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await institucion_ayudaService.borrarInstitucion_Ayuda(req.params.id);
      if (can)
        return res.status(200).json({ message: "La institucion_ayuda se ha borrado" });
      return res.status(404).json({ message: "La institucion_ayuda no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
