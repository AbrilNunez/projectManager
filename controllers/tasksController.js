module.exports = {
    list: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Lista de tareas",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en tasksList",
        });
      }
    },
    store: async (req, res) => {
      try {
        return res.status(201).json({
          ok: true,
          msg: "Tarea guardada",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en taskStore",
        });
      }
    },
    detail: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Detalle de la tarea",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en taskDetail",
        });
      }
    },
    update: async (req, res) => {
      try {
        return res.status(201).json({
          ok: true,
          msg: "Tarea actualizada",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en taskUpdate",
        });
      }
    },
    remove: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Tarea eliminada",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en taskRemove",
        });
      }
    },
    changeState: async (req, res) => {
      try {
        return res.status(200).json({
          ok: true,
          msg: "Tarea completada",
        });
      } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          ok: false,
          msg: error.message || "Ups, lo siento! Hubo un error en changeState",
        });
      }
    },
    
  };
  