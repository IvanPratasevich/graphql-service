export const favouritesResolver = {
  Query: {
    favourites: (parent, args, { dataSources }) => {
      return dataSources.FavouritesAPI.getFavourites();
    },
  },
  Mutation: {
    addTrackToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.FavouritesAPI.addItem('tracks', id);
    },

    addBandToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.FavouritesAPI.addItem('bands', id);
    },

    addArtistToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.FavouritesAPI.addItem('artists', id);
    },

    addGenreToFavourites: (parent, { id }, { dataSources }) => {
      return dataSources.FavouritesAPI.addItem('genres', id);
    },
  },

  Favourites: {
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
