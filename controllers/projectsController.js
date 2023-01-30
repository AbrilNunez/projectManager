module.exports = {
    list: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Lista de proyectos",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en projectList",
        });
      }
    },
    store: async (req, res) => {
      try {
        return res.status(201).json({
          ok: true,
          msg: "Proyecto guardado",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en projectStore",
        });
      }
    },
    detail: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Detalle del proyecto",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en projectDetail",
        });
      }
    },
    update: async (req, res) => {
      try {
        return res.status(201).json({
          ok: true,
          msg: "Proyecto actualizado",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en projectUpdate",
        });
      }
    },
    remove: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Proyecto eliminado",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en projectRemove",
        });
      }
    },
    addCollaborator: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Colaborador añadido",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en colaboratorAdd",
        });
      }
    },
    removeCollaborator: async (req, res) => {
        try {
          return res.status(200).json({
            ok: true,
            msg: "Colaborador eliminado",
          });
        } catch (error) {
          console.log(error);
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Ups, lo siento! Hubo un error en colaboratorRemove",
          });
        }
      },
  };
  