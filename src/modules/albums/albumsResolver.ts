export const albumsResolver = {
  Query: {
    album: (parent, { id }, { dataSources }) => {
      return dataSources.AlbumsAPI.getAlbum(id);
    },
    albums: (parent, { paginationAlbumInput }, { dataSources }) => {
      return dataSources.AlbumsAPI.getAlbums(paginationAlbumInput.offset, paginationAlbumInput.limit);
    },
  },
  Mutation: {
    createAlbum: (parent, { createAlbumInput }, { dataSources }) => {
      return dataSources.AlbumsAPI.createAlbum(createAlbumInput);
    },
    deleteAlbum: (parent, { id }, { dataSources }) => {
      return dataSources.AlbumsAPI.deleteAlbum(id);
    },
    updateAlbum: (parent, { id, updateAlbumInput }, { dataSources }) => {
      return dataSources.AlbumsAPI.updateAlbum(id, updateAlbumInput);
    },
  },

  Album: {
    id: (parent) => {
      return parent._id;
    },

    genres: async ({ genresIds }, args, { dataSources }) => {
      return dataSources.GenresAPI.getGenresByIds(genresIds);
    },

    artists: async ({ artistsIds }, args, { dataSources }) => {
      return dataSources.ArtistsAPI.getArtistsByIds(artistsIds);
    },

    bands: async ({ bandsIds }, args, { dataSources }) => {
      return dataSources.BandsAPI.getBandsByIds(bandsIds);
    },

    tracks: async ({ trackIds }, args, { dataSources }) => {
      return dataSources.TracksAPI.getTracksByIds(trackIds);
    },
  },
};
