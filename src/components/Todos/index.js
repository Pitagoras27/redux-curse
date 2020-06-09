import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';
import { getTodosAction } from '../../actions/getTodos';
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
		const { todos, loadingTodos, errorTodos } = this.props.todos;

		if (loadingTodos) {
			return <Spinner />
		}
		if (errorTodos) {
			return <Fail mensaje={ errorTodos } />
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
		const { todos } = this.props.todos;
		const forUser = {
			...todos[userId]
		};

		return Object.keys(forUser).map((todoId) => (
			<div key={ todoId }>
				<input type='checkbox'
					defaultChecked={ forUser[todoId].completed }
				/>
				{ forUser[todoId].title }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
