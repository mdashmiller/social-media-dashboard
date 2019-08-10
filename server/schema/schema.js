const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

const posts = [
  {
    id: '1',
    title: 'where are you, doc?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '1'
  },
  {
    id: '2',
    title: 'taking einy for a walk',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '2'
  },
  {
    id: '3',
    title: 'why did i wake up on the porch?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '3'
  },
  {
    id: '4',
    title: 'i hate manure!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '4'
  },
  {
    id: '5',
    title: 'check out my new truck',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '1'
  },
  {
    id: '6',
    title: 'eastwood to you',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '1'
  },
  {
    id: '7',
    title: '1.21 gigawatts!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '2'
  },
  {
    id: '8',
    title: 'my hair from the back',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: 'some date and time',
    userId: '3'
  }
]

const users = [
  { id: '1', name: 'marty', age: 18 },
  { id: '2', name: 'doc', age: 60 },
  { id: '3', name: 'jennifer', age: 17 },
  { id: '4', name: 'biff', age: 22 },
]

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    time: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return _.find(users, { id: parent.userId })
      }
    }
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return _.filter(posts, { userId: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(posts, { id: args.id })
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id })
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return posts
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
