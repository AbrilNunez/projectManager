const express = require('express');
const router = express.Router();

const {register, login, checked, sendToken, verifyToken, changePassword} = require('../controllers/authController')

/* /api/auth */
router
        .post('/register', register)
        .post('/login', login)
        .get('/checked', checked)
        .post('/send-token', sendToken)
        .route('/reset-password')
            .get(verifyToken)
            .post(changePassword)


module.exports = router;