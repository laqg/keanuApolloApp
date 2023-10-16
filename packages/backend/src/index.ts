import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

import KeanuAPI from "./api/keanu-api.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        keanuApi: new KeanuAPI({ cache }),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀 Server listening at: ${url}`);
