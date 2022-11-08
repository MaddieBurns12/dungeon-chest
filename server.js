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
    { id: 1, name: 'main', level: 3, race: 'human', strength: 5, constitution: 5, dexterity: 5, wisdom: 5, intelligence: 5, charisma: 5, userId: 1 },
    { id: 2, name: 'secondary', level: 7, race: 'gnome', strength: 5, constitution: 5, dexterity: 5, wisdom: 5, intelligence: 5, charisma: 5, userId: 3 },
    { id: 3, name: 'throwaway', level: 1, race: 'elf', strength: 5, constitution: 5, dexterity: 5, wisdom: 5, intelligence: 5, charisma: 5, userId: 2 }
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
        level: { type: GraphQLNonNull(GraphQLInt) },
        race: { type: GraphQLNonNull(GraphQLString) },
        strength: { type: GraphQLNonNull(GraphQLInt) },
        constitution: { type: GraphQLNonNull(GraphQLInt) },
        dexterity: { type: GraphQLNonNull(GraphQLInt) },
        wisdom: { type: GraphQLNonNull(GraphQLInt) },
        intelligence: { type: GraphQLNonNull(GraphQLInt) },
        charisma: { type: GraphQLNonNull(GraphQLInt) },
        userId: { type: GraphQLNonNull(GraphQLInt) },
        user: {
            type: UserType,
            resolve: (character) => {
                return users.find(user => user.id === character.userId)
            }
        },        
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
                userId: { type: GraphQLNonNull(GraphQLInt) },
                level: { type: GraphQLNonNull(GraphQLInt) },
                race: { type: GraphQLNonNull(GraphQLString) },
                strength: { type: GraphQLNonNull(GraphQLInt) },
                constitution: { type: GraphQLNonNull(GraphQLInt) },
                dexterity: { type: GraphQLNonNull(GraphQLInt) },
                wisdom: { type: GraphQLNonNull(GraphQLInt) },
                intelligence: { type: GraphQLNonNull(GraphQLInt) },
                charisma: { type: GraphQLNonNull(GraphQLInt) },
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
        updateCharacter: {
            type: CharacterType,
            description: 'Edit a character',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLNonNull(GraphQLString) },
                level: { type: GraphQLNonNull(GraphQLInt) },
                race: { type: GraphQLNonNull(GraphQLString) },
                strength: { type: GraphQLNonNull(GraphQLInt) },
                constitution: { type: GraphQLNonNull(GraphQLInt) },
                dexterity: { type: GraphQLNonNull(GraphQLInt) },
                wisdom: { type: GraphQLNonNull(GraphQLInt) },
                intelligence: { type: GraphQLNonNull(GraphQLInt) },
                charisma: { type: GraphQLNonNull(GraphQLInt) },
            },
        },
        deleteCharacter: {
            type: CharacterType,
            description: 'Delete a character',
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return characters.findByIdAndDelete(args.id);
            }
        }
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
