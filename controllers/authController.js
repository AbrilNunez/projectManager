module.exports = {
  register: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario registrado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error en el registro",
      });
    }
  },
  login: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario logueado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error en el login",
      });
    }
  },
  checked: async (req, res) => {
    try {
      return res.status(201).json({
        ok: true,
        msg: "Usuario checkeado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error en el checkeo",
      });
    }
  },
  sendToken: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Token enviado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error al enviar el token",
      });
    }
  },
  verifyToken: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Token verificado",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error al verificar el token",
      });
    }
  },
  changePassword: async (req, res) => {
    try {
      return res.status(200).json({
        ok: true,
        msg: "Contraseña actualizada",
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Ups, lo siento! Hubo un error al cambiar la contraseña",
      });
    }
  },
};
