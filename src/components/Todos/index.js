import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';
import {
	getTodosAction,
	persistCheckbox,
	deleteItem
} from '../../actions/getTodos';
import '../../css/components/todoLIst.css';
class Todos extends Component {
  
  componentDidMount() {
		const { getTodosAction, todos } = this.props;
		const list = todos.todos;

		if(!Object.keys(list).length) {
			getTodosAction();
		}
  }

  showContent = () => {
		const { todos, loadingTodos, errorMessageTodos } = this.props.todos;

		if (loadingTodos) {
			return <Spinner />
		}
		if (errorMessageTodos) {
			return <Fail message={ errorMessageTodos } />
		}

		return Object.keys(todos).map((userId) => (
			<div key={ userId }>
				<h2>Usuario { userId }</h2>
				<div>
					{ this.setTodoUI(userId) }
				</div>
			</div>
		));
	};

	setTodoUI = (userId) => {
		const {
			persistCheckbox,
			todos: { todos },
			deleteItem,
		} = this.props;

		const forUser = {
			...todos[userId]
		};

		return Object.keys(forUser).map((todoId) => (
			<div key={ todoId }>
				<input type='checkbox'
					defaultChecked={ forUser[todoId].completed }
					onChange={ () => persistCheckbox({ userId, todoId }) }
				/>
				{ forUser[todoId].title }
				<Link to={`/tareas/guardar/${userId}/${todoId}`}>
					<button type='button'>Editar</button>
				</Link>
				<button 
					type='button'
					onClick={() => deleteItem(todoId)}
				>Eliminar</button>
			</div>
		));
	};

	render() {
		return (
			<div className='main-container-todolist'>
        <Link to='/tareas/guardar'>
          <button type='button'>Save new list</button>
        </Link>
				{ this.showContent() }
			</div>
		);
	}
}

const mapStateToProps = state => ({
  todos: state.todosReducer,
});

const mapDispatchToProps = {
	getTodosAction,
	persistCheckbox,
	deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
