// resolvers will go here
// resolvers serve the response for the queries within typeDefs

// import from database
const { User, Character } = require('../models')
const { AuthenticationError } = require('apollo-server-express'); 
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-password')
                .populate('characters')
                
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        characters: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Character.find(params).sort({ createdAt: -1 });
        },
        character: async (parent, { _id }) => {
            return Character.findOne({ _id });
        }
    },
    Mutation : {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return { token, user };
        },
        addCharacter: async (parent, args, context) => {
            if (context.user) {
                const character = await Character.create({ ...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { characters: character._id }},
                    { new: true }
                );

                return character;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            // user.password = await bcrypt.hash(password, 12)
            // or would you hash correctPw?

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;