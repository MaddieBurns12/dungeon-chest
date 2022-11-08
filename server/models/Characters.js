const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    level: Number,
    race: String,
    class: String,
    gender: String,
    // age: Number,
    strength: Number,
    constitution: Number,
    dexterity: Number,
    wisdom: Number,
    intelligence: Number,
    charisma: Number,
    userId: {
        // bind to user that made it
    }
});

module.exports = mongoose.model('Character', characterSchema);

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