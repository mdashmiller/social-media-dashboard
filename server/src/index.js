const { GraphQLServer } = require('graphql-yoga')

let posts = [
  {
    id: '0',
    title: 'First fake post',
    content: 'Content for first fake post',
  },
  {
    id: '1',
    title: 'Second fake post',
    content: 'Content for second fake post',
  },
  {
    id: '2',
    title: 'Third fake post',
    content: 'Content for third fake post',
  },
]
let idCount = posts.length

const resolvers = {
  Query: {
    info: () => `This is the API of a Facebook clone`,
    feed: () => posts,
  },
  Mutation: {
    post: (parent, args) => {
      const post = {
        id: `${idCount++}`,
        title: args.title,
        content: args.content,
      }
      posts.push(post)
      return post
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
