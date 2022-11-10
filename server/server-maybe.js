const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
    }
`

async function startServer() {
   const app = express()
    const apolloServer - new Apollo
}

startServer();