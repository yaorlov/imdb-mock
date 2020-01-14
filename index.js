require('graphql-import-node/register');
const schema = require('./schema.gql');
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`${schema}`;

const mocks = {
  Money: () => Math.random() * 10000,
  UserProfileType: () => ({
    fullName: 'John Doe'
  }),
  ImageType: () => ({
    filePath: 'https://picsum.photos/200/300'
  })
};

const server = new ApolloServer({
  typeDefs,
  mocks: mocks
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
