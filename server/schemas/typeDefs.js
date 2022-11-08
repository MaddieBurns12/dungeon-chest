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
        level: Int
        race: String
        class: String
        gender: String
        strength: Int
        constitution: Int
        dexterity: Int
        wisdom: Int
        intelligence: Int
        charisma: Int

    }
    type Query {
       me: User
       characters(username: String!): [Character]
       character(_id: ID!): Character 
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String! email: String!, password: String!): Auth
        addCharacter: Character
    }
    type Auth {
        token: ID!
        user: User
    }
`;


// export the typeDefs
module.exports = typeDefs;