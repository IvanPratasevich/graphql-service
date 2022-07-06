export const genresResolver = {
  Query: {
    genre: (parent, { id }, { dataSources }) => {
      return dataSources.GenresAPI.getGenre(id);
    },
    genres: (parent, { paginationGenreInput }, { dataSources }) => {
      return dataSources.GenresAPI.getGenres(paginationGenreInput.offset, paginationGenreInput.limit);
    },
  },
  Mutation: {
    createGenre: (parent, { createGenreInput }, { dataSources }) => {
      return dataSources.GenresAPI.createGenre(createGenreInput);
    },
    deleteGenre: (parent, { id }, { dataSources }) => {
      return dataSources.GenresAPI.deleteGenre(id);
    },
    updateGenre: (parent, { id, updateGenreInput }, { dataSources }) => {
      return dataSources.GenresAPI.updateGenre(id, updateGenreInput);
    },
  },
  Genre: { id: (parent) => parent._id },
};
