export const userResolver = {
  Query: {
    user: async (parent, { id }, { dataSources }) => {
      return dataSources.UsersAPI.getUser(id);
    },
    getJWT(parent, args, { dataSources }) {
      return dataSources.UsersAPI.loginUser(args);
    },
  },
  Mutation: {
    registerUser(parent, args, { dataSources }) {
      return dataSources.UsersAPI.registerUser(args);
    },
  },
};
