const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    level: {
        type: String,
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
    // age: String,
    strength: {
        type: String,
        require: true
    },
    constitution: {
        type: String,
        require: true
    },
    dexterity: {
        type: String,
        require: true
    },
    wisdom: {
        type: String,
        require: true
    },
    intelligence: {
        type: String,
        require: true
    },
    charisma: {
        type: String,
        require: true
    },
    good: {
        type: String,
        require: true
    },
    bad: {
        type: String,
        require: true
    },
    inventory: {
        type: String,
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