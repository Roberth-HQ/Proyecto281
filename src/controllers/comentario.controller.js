import comentarioService from "../services/comentario.service";

export default {
  listar: async (req, res) => {
    try {
      const comentarios = await comentarioService.listarComentario();
      return res.status(200).json({ data: comentarios });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  obtener: async (req, res) => {
    try {
      const comentario = await comentarioService.obtenerComentario(req.params.id);
      return res.status(200).json({ data: comentario });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  agregar: async (req, res) => {
    try {
      const comentario = await comentarioService.agregarComentario(req.query);
      return res
        .status(201)
        .json({ message: "El comentario se ha agregado: ", data: comentario });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  editar: async (req, res) => {
    try {
      let can = await comentarioService.editarComentario(req.params.id, req.query);
      if (can)
        return res.status(200).json({ message: "El comentario se ha editado" });
      return res.status(404).json({ message: "El comentario no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  borrar: async (req, res) => {
    try {
      let can = await comentarioService.borrarComentario(req.params.id);
      if (can)
        return res.status(200).json({ message: "El comentario se ha borrado" });
      return res.status(404).json({ message: "El comentario no existe" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
