import { combineReducers } from 'redux';
import usariosReducer from './usuariosReducer';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  usariosReducer,
  postsReducer,
  todosReducer,
});