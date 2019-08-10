import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, author, time, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div data-testid="post-preview"
      style={{ 'border': '1px solid', 'marginBottom': '12px', 'cursor': 'pointer' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 data-testid="preview-title">{title}</h3>
      <p data-testid="preview-author">{author}</p>
      <p data-testid="preview-time">{time}</p>
      {isExpanded && 
        <p>{content}</p>
      }
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
}

export default Post
