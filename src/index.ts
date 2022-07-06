import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typedefs } from './typedefs/typedefs';
import 'dotenv/config';
import { UsersAPI } from './modules/users/usersApi';
import { resolvers } from './resolvers/resolvers';

const start = async () => {
  const PORT: number = Number(process.env.PORT) || 3000;
  const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers,
    dataSources: () => {
      return {
        UsersAPI: new UsersAPI(),
      };
    },
    context: ({ req }) => {
      return { token: req.headers.authorization || '' };
    },
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(3000, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
};

start();
