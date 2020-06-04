import { combineReducers } from 'redux';
import usariosReducer from './usuariosReducer';
import allPostsReducer from './postsReducer';

export default combineReducers({
  usariosReducer,
  allPostsReducer,
});