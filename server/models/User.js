const { Schema, model } = require('mongoose');

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
    characters: [
        {type: Schema.Types.ObjectId,
        ref: "Character"
    }
    ]

});

module.exports = model('User', userSchema);

// Data we want stored when the client creates a new user:

// - name of the user 
// - email of the user
// - password of the user
// - characters created by the user
