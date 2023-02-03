const createError = require('http-errors');
const User = require('../database/models/User');
const errorResponse = require('../helpers/errorResponse');

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if ([name, email, password].includes("")) {
        throw createError(400,"Todos los datos son obligatorios");
      };

      let user = await User.findOne({
        email
      });

      console.log(user);

      return res.status(201).json({
        ok: true,
        msg: "Usuario registrado",
      });
      
    } catch (error) {
      console.log(error);
      return errorResponse(res, error, "REGISTER")
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
        msg:
          error.message || "Ups, lo siento! Hubo un error al enviar el token",
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
        msg:
          error.message ||
          "Ups, lo siento! Hubo un error al verificar el token",
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
        msg:
          error.message ||
          "Ups, lo siento! Hubo un error al cambiar la contraseña",
      });
    }
  },
};
