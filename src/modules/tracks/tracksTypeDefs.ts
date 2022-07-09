import { gql } from 'apollo-server-express';

export const tracksTypeDefs = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks(paginationTrackInput: PaginationTrackInput): [Track]!
    track(id: ID!): Track
  }

  input PaginationTrackInput {
    limit: Int
    offset: Int
  }

  input CreateTrackInput {
    title: String!
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  input UpdateTrackInput {
    title: String!
    albumId: ID
    artistsIds: [ID]
    bandsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createTrack(createTrackInput: CreateTrackInput!): Track
    updateTrack(id: ID!, updateTrackInput: UpdateTrackInput!): Track
    deleteTrack(id: ID!): DELETE
  }
`;
