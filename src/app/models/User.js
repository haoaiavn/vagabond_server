const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const User = new Schema({
    user: {type: String, default: 'No name', unique: true},
    password: {type: String, default: ''},
    name: {type: String, default: ''},
    avatar_link: {type: String, default: ''},
    number: {type: String, slug: 'name', unique: true}
}, 
{timestamps: true});

module.exports = mongoose.model('User', User);