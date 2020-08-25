import { people, getById } from "./db";

// graphqlをresolveするものが必要なので作成

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

// const resolvers = {
//   Query: {
//     person: () => kim,
//   },
// };

// const resolvers = {
//   Query: {
//     name: function () {
//       return kim;
//     },
//   },
// };

// const resolvers = {
//     Query: {
//       name: () => "kim",
//     },
//   };

export default resolvers;
