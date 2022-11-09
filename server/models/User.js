const { Schema, model } = require('mongoose');
const Character = require('./Characters');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:  true
    },
    characters: [Character.schema]
});

module.exports = model('User', userSchema);

// Data we want stored when the client creates a new user:

// - name of the user 
// - email of the user
// - password of the user
// - characters created by the user
