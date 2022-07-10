export const userResolver = {
  Query: {
    user: async (parent, { id }, { dataSources }) => {
      return dataSources.UsersAPI.getUser(id);
    },
    jwt: (parent, { authorizeUserInput }, { dataSources }) => {
      return dataSources.UsersAPI.loginUser(authorizeUserInput);
    },
  },
  Mutation: {
    register: (parent, { registerUserInput }, { dataSources }) => {
      return dataSources.UsersAPI.registerUser(registerUserInput);
    },
  },
  User: { id: (parent) => parent._id },
};
