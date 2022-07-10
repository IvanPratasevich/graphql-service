import { gql } from 'apollo-server-express';

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Mutation {
    addTrackToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
  }

  type Query {
    favourites: Favourites
  }
`;
