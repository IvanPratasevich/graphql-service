import { gql } from 'apollo-server-express';

export const albumsTypeDefs = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    albums(paginationAlbumInput: PaginationAlbumInput): [Album]!
    album(id: ID!): Album
  }

  input PaginationAlbumInput {
    limit: Int
    offset: Int
  }

  input CreateAlbumInput {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }

  input UpdateAlbumInput {
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createAlbum(createAlbumInput: CreateAlbumInput!): Album
    updateAlbum(id: ID!, updateAlbumInput: UpdateAlbumInput!): Album
    deleteAlbum(id: ID!): DELETE
  }
`;
