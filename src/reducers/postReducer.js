import uuidv4 from 'uuid/v4'
import { GET_POSTS } from '../actions/types'

const initialState = [
  {
    uid: uuidv4(),
    author: 'marty',
    title: 'where are you, doc?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'doc',
    title: 'taking einy for a walk',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'jennifer',
    title: 'why did i wake up on the porch?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  },
  {
    uid: uuidv4(),
    author: 'biff',
    title: 'i hate manure!',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ullam sit ab architecto similique nesciunt. Fugiat officia quia ex ullam autem, iure minima commodi sint nam quod debitis mollitia?',
    time: Date.now()
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state
      }
    default:
      return state
  }
}
