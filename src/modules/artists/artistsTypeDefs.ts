import { gql } from 'apollo-server-express';

export const artistsTypeDefs = gql`
  type Artist {
    id: ID!
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Query {
    artists(paginationArtistInput: PaginationArtistInput): [Artist]!
    artist(id: ID!): Artist
  }

  input PaginationArtistInput {
    limit: Int
    offset: Int
  }

  input CreateArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bandsIds: [String]
    instruments: [String]
  }

  input UpdateArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createArtist(createArtistInput: CreateArtistInput!): Artist
    updateArtist(id: ID!, updateArtistInput: UpdateArtistInput!): Artist
    deleteArtist(id: ID!): DELETE
  }
`;
