import axios from 'axios';

import * as todos from '../constants';

const { TODOS: typesTodoList } = todos;

export const getTodosAction = () => async dispatch => {
  const {
    loading,
    getTodos,
    errorMessageTodos,
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
      type: errorMessageTodos,
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
    errorMessageTodos,
  } = typesTodoList;

  dispatch({
    type: loading,
    payload: true
  });
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', bodyPost);
    dispatch({
      type: saveTask,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: errorMessageTodos,
      payload: 'Lo sentimos no se pudo guardar la información',
    });
  }
}

export const updateTask = editInfo => async dispatch => {
  const { 
    editTask,
    loading,
    errorMessageTodos,
  } = typesTodoList;
  dispatch({
    type: loading,
    payload: true
  });
  try {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editInfo.userId}`,
      editInfo
    );

    dispatch({
      type: editTask,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: errorMessageTodos,
      payload: 'Lo sentimos no se pudo actualizar la información',
    });
  }
}

export const persistCheckbox = ({ userId, todoId }) => (dispatch, getState) => {
  const { checkboxListState } = typesTodoList;
  const { todos } = getState().todosReducer;
  const selected = todos[userId][todoId];

  const cloneInmutable = {
    ...todos,
  }

  cloneInmutable[userId] = {
    ...todos[userId]
  }

  cloneInmutable[userId][todoId] = {
    ...todos[userId][todoId],
    completed: !selected.completed,
  }

  dispatch({
    type: checkboxListState,
    payload: cloneInmutable
  })
}

export const deleteItem = idTask => async dispatch => {
  const { 
    loading,
    errorMessageTodos,
    getTodos,
  } = typesTodoList;

  dispatch({
    type: loading,
    payload: true
  });
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${idTask}`);
    dispatch({
      type: getTodos,
      payload: {}
    })
  } catch (error) {
    dispatch({
      type: errorMessageTodos,
      payload: 'No se pudo eliminar el item asociado, favor de intentar más tarde',
    })
  }
}

export const cleanForm = () => dispatch => {
  const { cleanForm } = typesTodoList;

  dispatch({
    type: cleanForm,
  })
}