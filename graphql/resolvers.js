import { getMovies } from "./db";

// graphqlをresolveするものが必要なので作成

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

export default resolvers;
