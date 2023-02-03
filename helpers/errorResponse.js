module.exports = (res, error, method) => {
    console.log(error);
    return res.status(error.status || 500).json({
        ok : false,
        msg : error.message ||  `Ups, lo siento! Hubo un error en ${method}`
    })
}