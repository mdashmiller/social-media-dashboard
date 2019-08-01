import { GET_POSTS } from './types'

export const getPosts = () => dispatch => {
  dispatch({
    type: GET_POSTS,
    payload: 'result_of_get_posts_action'
  })
}
