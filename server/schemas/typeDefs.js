// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
// this is where all type definitions will go

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        characters: [Character]
    }
    type Character {
        _id: ID
        name: String
        level: String
        race: String
        class: String
        gender: String
        strength: String
        constitution: String
        dexterity: String
        wisdom: String
        intelligence: String
        charisma: String
        good: String
        bad: String
        inventory: String
    }
    type Query {
       me: User
       characters(username: String!): [Character]
       character(_id: ID!): Character 
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String! email: String!, password: String!): Auth
        addCharacter(
            name: String!,
            level: String!,
            race: String!,
            class: String!,
            gender: String!,
            strength: String!,
            constitution: String!,
            dexterity: String!,
            wisdom: String!,
            intelligence: String!,
            charisma: String!
            good: String!,
            bad: String!,
            inventory: String
        ): Character
        updateCharacter(
            id: ID!,
            level: String,
            gender: String,
            strength: String,
            constitution: String,
            dexterity: String,
            wisdom: String,
            intelligence: String,
            charisma: String,
            inventory: String
        ): Character
        deleteCharacter(
            id: ID!
        ): Character
    }
    type Auth {
        token: ID!
        user: User
    }
`;


// export the typeDefs
module.exports = typeDefs;