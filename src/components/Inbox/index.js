import React from 'react'

import Loading from '../Loading'

import { posts } from '../../store/fakeData'

const Inbox = () => {
  return (
    <section data-testid="inbox">
      <h2>Inbox</h2>
      {posts.length ? (
        posts.map(post =>
          <div data-testid="post-preview" key={post.uid}>
            <h3 data-testid="preview-title">{post.title}</h3>
            <p data-testid="preview-author">{post.author}</p>
            <p data-testid="preview-time">{post.time}</p>
          </div>
        )
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Inbox
