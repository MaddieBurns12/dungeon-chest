const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);

// Data we want stored when the client creates a new user:

// - name of the user 
// - email of the user
// - password of the user
// - characters created by the user
