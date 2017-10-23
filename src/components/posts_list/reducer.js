import { FETCH_POSTS } from './constants';

const INITIAL_STATE = {
  posts: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
