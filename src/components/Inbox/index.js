import React, { useEffect } from 'react'

import Loading from '../Loading'

import { connect } from 'react-redux'
import { getPosts } from '../../actions/postActions'

import PropTypes from 'prop-types'

const Inbox = ({ posts }) => {

  useEffect(() => {
    getPosts()
  }, [])

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

Inbox.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    uid: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  })).isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  }
}

export default connect(mapStateToProps, { getPosts })(Inbox) 
