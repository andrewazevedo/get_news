import { combineReducers } from 'redux';
import PostsReducer from '../components/posts_list/reducer';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
