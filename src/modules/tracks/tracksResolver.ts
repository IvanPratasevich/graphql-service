export const tracksResolver = {
  Query: {
    track: (parent, { id }, { dataSources }) => {
      return dataSources.TracksAPI.getTrack(id);
    },
    tracks: (parent, { paginationTrackInput }, { dataSources }) => {
      return dataSources.TracksAPI.getTracks(paginationTrackInput.offset, paginationTrackInput.limit);
    },
  },
  Mutation: {
    createTrack: (parent, { createTrackInput }, { dataSources }) => {
      return dataSources.TracksAPI.createTrack(createTrackInput);
    },
    deleteTrack: (parent, { id }, { dataSources }) => {
      return dataSources.TracksAPI.deleteTrack(id);
    },
    updateTrack: (parent, { id, updateTrackInput }, { dataSources }) => {
      return dataSources.TracksAPI.updateTrack(id, updateTrackInput);
    },
  },

  Track: {
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

    album: async ({ albumId }, args, { dataSources }) => {
      return dataSources.AlbumsAPI.getAlbum(albumId);
    },
  },
};
