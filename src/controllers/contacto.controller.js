import contactoService from "../services/contacto.service";

export default {
  listar: async (req, res) => {
    try {
      const contactos = await contactoService.listarContacto();
      return res.status(200).json({ data: contactos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const contacto = await contactoService.obtenerContacto(req.params.id);
      return res.status(200).json({ data: contacto });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const contacto = await contactoService.agregarContacto(req.query);
      return res
        .status(201)
        .json({ message: "El contacto se ha agregado: ", data: contacto });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await contactoService.editarContacto(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "El contacto se ha editado" });
      return res.status(404).json({ message: "El contacto no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await contactoService.borrarContacto(req.params.id);
      if (can)
        return res.status(200).json({ message: "El contacto se ha borrado" });
      return res.status(404).json({ message: "El contacto no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
