import React, { useEffect } from 'react'

import Post from '../Post/Post'
import Loading from '../Loading'

import { connect } from 'react-redux'
import { getPosts } from '../../actions/postActions'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import PropTypes from 'prop-types'

const GET_POSTS = gql`
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

function Inbox() {
  const { loading, error, data } = useQuery(GET_POSTS)
  // useEffect(() => {
  //   getPosts()
  // }, [])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <section data-testid="inbox">
      <h2>Inbox</h2>
      {/* {posts.length ? (
        posts.map(post =>
          <Post 
            key={post.id} title={post.title} author={post.author} 
            time={post.time} content={post.content}
          />
        )
      ) : (
        <Loading />
      )} */}
      {/* {data.posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.user.name}</p>
          <p>{post.content}</p>
          <p>{post.time}</p>
        </div>
      ))} */}
      {data.posts.map(post => (
        <Post
          key={post.id} title={post.title} user={post.user.name}
          time={post.time} content={post.content} 
        />
      ))}
    </section>
  )
}

// Inbox.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     uid: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     time: PropTypes.number.isRequired,
//   })).isRequired,
//   getPosts: PropTypes.func.isRequired
// }

// const mapStateToProps = state => {
//   return {
//     posts: state.postReducer
//   }
// }

// export default connect(mapStateToProps, { getPosts })(Inbox) 
export default Inbox
