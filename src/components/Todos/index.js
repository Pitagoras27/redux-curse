import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner/spinner';
import Fail from '../Fail';
import { getTodosAction } from '../../actions/getTodos';
import '../../css/components/todoLIst.css';
class Todos extends Component {
  
  componentDidMount() {
    this.props.getTodosAction();
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
		console.log(this.props.tareas);
		return (
			<div className='main-container-todolist'>
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
