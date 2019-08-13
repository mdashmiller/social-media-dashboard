import gql from 'graphql-tag'

export const GET_POSTS = gql`
  {
    posts {
      id
      title
      content
      time
      user {
        name
      }
    }
  }
`

export const ADD_POST = gql`
  mutation AddPost ($title: String!, $message: String!, $userId: ID! ) {
    addPost(title: $title, content: $message, userId: $userId) {
      id
      title
      content
      time
      user {
        name
      }
    }
  }
`
