export const getAll = () => dispatch => {
  dispatch({
    type: 'GET_USERS',
    payload: [0,1,2,3],
  })
};