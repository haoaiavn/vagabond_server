const { mongooseToObject} = require('../../utils/mongoose');
const User = require('../models/User');

class UserController {
    login(req, res, next) {
        console.log('login method is running!!!');
        const phone = req.body.phone;
        const password = req.body.password;

        res.json({ phone: phone, password: password })
    }
    register(req, res, next){
        console.log('login method is running!!!');
        const phone = req.body.phone;
        const password = req.body.password;
    }
}

module.exports = new UserController();
