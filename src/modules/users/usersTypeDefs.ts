import { gql } from 'apollo-server-express';

export const usersTypeDefs = gql`
  type Query {
    user(id: ID!): User
    getJWT(email: String!, password: String!): JWT
  }

  input RegisterUserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type JWT {
    jwt: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type Mutation {
    registerUser(registerUserInput: RegisterUserInput!): User!
  }
`;
