const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    level: {
        type: Number,
        require: true
    },
    race: {
        type: String,
        require: true
    },
    class: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    // age: Number,
    strength: {
        type: Number,
        require: true
    },
    constitution: {
        type: Number,
        require: true
    },
    dexterity: {
        type: Number,
        require: true
    },
    wisdom: {
        type: Number,
        require: true
    },
    intelligence: {
        type: Number,
        require: true
    },
    charisma: {
        type: Number,
        require: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
});

module.exports = model('Character', characterSchema);

// data we want stored when the client creates a new character

// name of the character
// race of the character
// class of the character
// character stats
// gender of the character
// age of the character
// pre-populated character image
// user who created the character
// ? created at ?
// ? updated at ?