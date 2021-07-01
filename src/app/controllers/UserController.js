const { mongooseToObject} = require('../../utils/mongoose');
const User = require('../models/User');

class UserController {
    login(req, res, next) {
        const phone = req.body.phone;
        const password = req.body.password;
        User.findOne({phone: phone})
        .then(user => {
            if(!user){
                res.json({status: 401, message: 'Your phone number is not exist!'});
                console.log(user);
            }
            else{
                if(!(user['password'] === password)){
                    res.json({status: 401, message: 'Your password was wrong!'});
                    console.log('password failed!');
                }
                else{
                    setTimeout(function() {
                        res.json({status: 200, user: user, jwt: user['user']});
                    },2000);
                    console.log('login true');
                }
                
            }   
        })
        .catch(next);
        
    };
    register(req, res, next){
        console.log('register method is running!!!');
        const phone = req.body.phone;
        const password = req.body.password;
    };
    show(req, res, next){
        console.log('show method is running!!!');
        const phone = req.body.phone;
        const password = req.body.password;
    };
}

module.exports = new UserController();
