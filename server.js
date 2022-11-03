const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');
const app = express();

const characters = [
    { id: 1, name: 'main', userId: 1 },
    { id: 2, name: 'secondary', userId: 1 },
    { id: 3, name: 'throwaway', userId: 1 }
]

const users = [
    { id: 1, name: 'user1', userId: 1 },
    { id: 2, name: 'user2', userId: 2 },
    { id: 3, name: 'user3', userId: 3 }
]

const CharacterType = new GraphQLObjectType({
    name: 'Character',
    description: 'This represents a character created by a user',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLInt) },
        user: {
            type: UserType,
            resolve: (character) => {
                return users.find(user => user.id === character.userId)
            }
        }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a user that created a character',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        characters: { 
            type: new GraphQLList(CharacterType),
            resolve: (user) => {
                return characters.filter(character => character.userId === user.id)
        }}
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        character: {
            type: CharacterType,
            description: 'A Single Character',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => characters.find(character => character.id === args.id)
        },
        characters: {
            type: new GraphQLList(CharacterType),
            description: 'List of All Characters',
            resolve: () => characters
        },
        users: {
            type: new GraphQLList(UserType),
            description: 'List of All Users',
            resolve: () => users
        },
        user: {
            type: UserType,
            description: 'A Single User',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => users.find(user => user.id === args.id)
        }

    })
})

const RootMutationType = new GraphQLObjectType ({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addCharacter: {
            type: CharacterType,
            description: 'Add a character',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                userId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const character = { id: characters.length + 1, name: args.name, userId: args.userId }
                characters.push(character)
                return character
            }
        },
        addUser: {
            type: UserType,
            description: 'Add a user',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const user = { id: users.length + 1, name: args.name }
                users.push(user)
                return user
            }
        },
    })
})

const schema = new GraphQLSchema ({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));
app.listen(5000, () => console.log('Server Running'));
