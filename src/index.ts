import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './schema/schema';
import 'dotenv/config';

const PORT: number = Number(process.env.PORT) || 3000;
const server = new ApolloServer({ typeDefs });
const app = express();
server.applyMiddleware({ app, path: '/graphql' });
app.listen(PORT, () => {
  console.log(`Server is listening on port ${3000}${server.graphqlPath}`);
});
