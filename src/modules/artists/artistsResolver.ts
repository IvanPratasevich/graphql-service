export const artistsResolver = {
  Query: {
    artist: (parent, { id }, { dataSources }) => {
      return dataSources.ArtistsAPI.getArtist(id);
    },
    artists: (parent, { paginationArtistInput }, { dataSources }) => {
      return dataSources.ArtistsAPI.getArtists(paginationArtistInput.offset, paginationArtistInput.limit);
    },
  },
  Mutation: {
    createArtist: (parent, { createArtistInput }, { dataSources }) => {
      return dataSources.ArtistsAPI.createArtist(createArtistInput);
    },
    deleteArtist: (parent, { id }, { dataSources }) => {
      return dataSources.ArtistsAPI.deleteArtist(id);
    },
    updateArtist: (parent, { id, updateArtistInput }, { dataSources }) => {
      return dataSources.ArtistsAPI.updateArtist(id, updateArtistInput);
    },
  },

  Artist: {
    id: (parent) => {
      return parent._id;
    },

    bands: async ({ bandsIds }, args, { dataSources }) => {
      return dataSources.BandsAPI.getBandsByIds(bandsIds);
    },
  },
};
