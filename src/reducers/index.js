import { combineReducers } from 'redux';
import usariosReducer from './usuariosReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  usariosReducer,
  postsReducer,
});