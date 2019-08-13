import React from 'react'

import Post from '../Post/Post'

import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from '../../queries/queries'

function Inbox() {
  const { loading, error, data } = useQuery(GET_POSTS)
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <section data-testid="inbox">
      <h2>Inbox</h2>
      {data.posts.map(post => (
        <Post
          key={post.id} title={post.title} user={post.user.name}
          time={post.time} content={post.content} 
        />
      ))}
    </section>
  )
}

export default Inbox
