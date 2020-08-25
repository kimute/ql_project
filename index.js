import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// check loclal:http://localhost:4000/
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql server Running"));

// console.log("sup");
