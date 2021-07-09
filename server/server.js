//gql is a tag function to parse the schema
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

//resolver is a function that handles the data for each one of the fields of your schema.
//here is where you have to make the queries to the db

const resolvers = {
  Query: {
    greeting: () => "Hello GraphQL world!👋",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));

//running node server.js launches the graphql playground (in-browser IDE)
