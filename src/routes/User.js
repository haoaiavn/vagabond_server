const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/:slug', userController.show);
module.exports = router;
