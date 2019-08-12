import React, { useState } from 'react'

import { handlePostFormSubmit } from '../../functions'

function Compose() {
  const [titleText, setTitleText] = useState('')
  const [messageText, setMessageText] = useState('')

  return (
    <section>
      <form onSubmit={e => handlePostFormSubmit(e, titleText, messageText)}>
        <h2>New Post</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text" id="title" name="post-title"
            value={titleText} onChange={e => setTitleText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text" id="message" name="post-message"
            value={messageText} onChange={e => setMessageText(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">
            POST
          </button>
        </div>
      </form>
    </section>
  )
}

export default Compose
