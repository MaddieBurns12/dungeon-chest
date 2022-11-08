const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        characters: [Characters]
    }

    type Character {
        _id: ID
        name: String
        level: Int
        race: String
        strength: Int
        constitution: Int
        dexterity: Int
        wisdom: Int
        intelligence: Int
        charisma: Int
        userId: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        characters(
            name: String
            level: Int
            race: String
            strength: Int
            constitution: Int
            dexterity: Int
            wisdom: Int
            intelligence: Int
            charisma: Int
        ): [Characters]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        addCharacter(characters: [ID]!): Characters
        updateCharacter(
            _id: ID!
            name: String!
            level: Int!
            race: String!
            strength: Int!
            constitution: Int!
            dexterity: Int!
            wisdom: Int!
            intelligence: Int!
            charisma: Int!
        ): Character
        login(email: String!, password: String): Auth
    }
`;

module.exports = typeDefs;