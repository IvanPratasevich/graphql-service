import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typedefs } from './typedefs/typedefs';
import 'dotenv/config';
import { UsersAPI } from './modules/users/usersApi';
import { resolvers } from './resolvers/resolvers';
import { GenresAPI } from './modules/genres/genresAPI';
import { BandsAPI } from './modules/bands/bandsAPI';
import { ArtistsAPI } from './modules/artists/artistsAPI';

const start = async () => {
  const PORT: number = Number(process.env.PORT) || 5000;
  const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers,
    dataSources: () => {
      return {
        UsersAPI: new UsersAPI(),
        GenresAPI: new GenresAPI(),
        BandsAPI: new BandsAPI(),
        ArtistsAPI: new ArtistsAPI(),
      };
    },
    context: ({ req }) => {
      return { token: req.headers.authorization || '' };
    },
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(PORT, () => {
    console.log(`Start server on the ${PORT} port!`);
  });
};

start();
