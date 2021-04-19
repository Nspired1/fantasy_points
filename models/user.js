const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

// plugin for passportLocalMongoose will add a username,
// hash and salt fields to store username, hashed password, and salt value
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);