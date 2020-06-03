import { ACTIONS_NAMES } from '../constants';
const INITIAL_STATE = {
  usuarios: []
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTIONS_NAMES.getUsers:
      return{...state, usuarios: payload}
    default:
      return state;
  }
}

export default users;