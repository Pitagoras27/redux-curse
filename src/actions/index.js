export const getAll = () => async dispatch => {
  const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await fetchData.json();
  dispatch({
    type: 'GET_USERS',
    payload: data,
  })
};