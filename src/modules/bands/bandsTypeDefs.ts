import { gql } from 'apollo-server-express';

export const bandsTypeDefs = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Query {
    bands(paginationBandInput: PaginationBandInput): [Band]!
    band(id: ID!): Band
  }

  input PaginationBandInput {
    limit: Int
    offset: Int
  }

  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }

  input CreateMemberInput {
    artist: ID!
    instrument: String
    years: [String]
  }

  input CreateBandInput {
    name: String!
    origin: String
    members: [CreateMemberInput]
    website: String
    genresIds: [ID]
  }

  input UpdateBandInput {
    name: String
    origin: String
    members: [CreateMemberInput]
    website: String
    genresIds: [ID]
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createBand(createBandInput: CreateBandInput!): Band
    updateBand(id: ID!, updateBandInput: UpdateBandInput!): Band
    deleteBand(id: ID!): DELETE
  }
`;
