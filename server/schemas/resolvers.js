// resolvers will go here
// resolvers serve the response for the queries within typeDefs

// import from database
const { User, Character } = require('../models')

const resolvers = {
    Query: {
        characters: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Character.find(params).sort({ createdAt: -1 });
        },
        character: async (parent, { _id }) => {
            return Character.findOne({ _id });
        }
    }
}

module.exports = resolvers;