import React from 'react'

import { useMutation } from '@apollo/react-hooks'
import { GET_POSTS } from '../../queries/queries'
import { ADD_POST } from '../../queries/queries'

function Compose() {
  let title
  let message
  const [
    addPost,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(
    ADD_POST,
    {
      update(cache, { data: { addPost } }) {
        const { posts } = cache.readQuery({ query: GET_POSTS });
        cache.writeQuery({
          query: GET_POSTS,
          data: { posts: posts.concat([addPost]) },
        });
      }
    }
  )

  return (
    <section>
      <form onSubmit={e => {
        e.preventDefault()
        addPost({
          variables: {
            title: title.value,
            message: message.value,
            userId: "5d51a620686e4816d07eaafb"
          }
        })
      }}>
        <h2>New Post</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text" id="title" ref={node => { title = node }}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text" id="message" ref={node => { message = node }}
          />
        </div>
        <div> 
          <button type="submit">
            POST
          </button>
        </div>
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </section>
  )
}

export default Compose
