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
    const todoData = {};
    data.forEach(item => (
      todoData[item.userId] = {
        ...todoData[item.userId],
        [item.id]: {
          ...item,
        }
      } 
    ))

    dispatch({
      type: getTodos,
      payload: todoData,
    })
  } catch (error) {
    dispatch({
      type: errorTodos,
      payload: 'No se ha podido recuperar la lista de tareas, favor de intentar más tarde',
    })
  }
}

export const handleChange = event => (dispatch, getState) => {
  const { setTasks } = typesTodoList;
  const { value, name } = event;
  const { tasks } = getState().todosReducer;
  const setTask = { ...tasks, [name]: value };
  dispatch({
    type: setTasks,
    payload: setTask, 
  })
}

export const saveTask = bodyPost => async dispatch => {
  const { 
    saveTask,
    loading,
    errorTodos,
  } = typesTodoList

  dispatch({
    type: loading,
    dispatch: true
  })
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', bodyPost);
    dispatch({
      type: saveTask,
      payload: data,
    })
  } catch (error) {
    console.log('action creator error', error)
    dispatch({
      type: errorTodos,
      dispatch: 'Lo sentimos no se pudo guardar la información',
    })   
  }
}