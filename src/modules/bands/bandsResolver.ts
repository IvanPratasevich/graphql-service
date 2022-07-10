export const bandsResolver = {
  Query: {
    band: (parent, { id }, { dataSources }) => {
      return dataSources.BandsAPI.getBand(id);
    },
    bands: (parent, { paginationBandInput }, { dataSources }) => {
      return dataSources.BandsAPI.getBands(paginationBandInput.offset, paginationBandInput.limit);
    },
  },
  Mutation: {
    createBand: (parent, { createBandInput }, { dataSources }) => {
      return dataSources.BandsAPI.createBand(createBandInput);
    },
    deleteBand: (parent, { id }, { dataSources }) => {
      return dataSources.BandsAPI.deleteBand(id);
    },
    updateBand: (parent, { id, updateBandInput }, { dataSources }) => {
      return dataSources.BandsAPI.updateBand(id, updateBandInput);
    },
  },

  Band: {
    id: (parent) => {
      return parent._id;
    },

    genres: async ({ genresIds }, args, { dataSources }) => {
      return dataSources.GenresAPI.getGenresByIds(genresIds);
    },

    members: async ({ members }, args, { dataSources }) => {
      return await Promise.all(
        members.map(async (member) => {
          return dataSources.ArtistsAPI.getArtist(member.artist);
        })
      ).then((result) => {
        if (members && members.length) {
          return result.map((artist, index) => ({
            ...artist,
            instrument: members[index].instrument,
            years: members[index].years,
          }));
        }
        return [];
      });
    },
  },

  Member: {
    id: (parent) => {
      return parent._id;
    },
  },
};
