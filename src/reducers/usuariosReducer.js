const INITIAL_STATE = {
  usuario: []
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action; 
  switch(type) {
    case 'GET_USERS':
      return{...state, usuarios: payload}
    default:
      return state;
  }
}

export default users;