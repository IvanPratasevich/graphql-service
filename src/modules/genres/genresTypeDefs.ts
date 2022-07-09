import { gql } from 'apollo-server-express';

export const genresTypeDefs = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }
  type Query {
    genre(id: ID!): Genre
    genres(paginationGenreInput: PaginationGenreInput): [Genre]!
  }

  input CreateGenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }

  input PaginationGenreInput {
    limit: Int
    offset: Int
  }

  input UpdateGenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  type DELETE {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createGenre(createGenreInput: CreateGenreInput!): Genre!
    updateGenre(id: ID!, updateGenreInput: UpdateGenreInput!): Genre!
    deleteGenre(id: ID!): DELETE
  }
`;
