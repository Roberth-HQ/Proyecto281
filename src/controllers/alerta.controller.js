import alertaService from "../services/alerta.service";

export default {
  listar: async (req, res) => {
    try {
      const alertas = await alertaService.listarAlerta();
      return res.status(200).json({ data: alertas });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const alerta = await alertaService.obtenerAlerta(req.params.id);
      return res.status(200).json({ data: alerta });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const alerta = await alertaService.agregarAlerta(req.query);
      return res
        .status(201)
        .json({ message: "La alerta se ha agregado: ", data: alerta });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await alertaService.editarAlerta(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "La alerta se ha editado" });
      return res.status(404).json({ message: "La alerta no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await alertaService.borrarAlerta(req.params.id);
      if (can)
        return res.status(200).json({ message: "La alerta se ha borrado" });
      return res.status(404).json({ message: "La alerta no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
