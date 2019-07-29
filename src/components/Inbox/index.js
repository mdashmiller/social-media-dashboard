import React from 'react'

import Loading from '../Loading'

import { posts } from '../../store/fakeData'

const Inbox = () => {
  return (
    <section data-testid="inbox">
      <h2>Inbox</h2>
      {posts.length ? (
        posts.map(post =>
          <article key={post.uid}>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.time}</p>
          </article>
        )
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Inbox
