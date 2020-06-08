import axios from 'axios';

import * as todos from '../constants';

const { TODOS: typesTodoList } = todos;

export const getTodosAction = () => async dispatch => {
  const {
    loading,
    getTodos,
    errorTodos,
  } = typesTodoList;

  dispatch({
    type: loading,
    payload: true,
  });

  try {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: getTodos,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: errorTodos,
      payload: 'No se ha podido recuperar la lista de tareas, favor de intentar más tarde',
    })
  }
}
