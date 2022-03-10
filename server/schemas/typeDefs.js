const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    helloWorld: String
  }

  // type Mutation {

  // }
`;


module.exports = typeDefs;