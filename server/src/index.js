const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    info: () => `This is the API of a Facebook clone`,
    feed: (root, args, context, info) => {
      return context.prisma.posts()
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createPost({
        title: args.title,
        content: args.content,
      })
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
