import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import TodoAPI from '../api/TodoAPI';

export class TodoList extends React.Component {

  render() {
    let {todos, showCompleted, searchText} = this.props;
    if(todos.length === 0) return <div><p className="container__message">Nothing to do</p></div>;
    return <div>
      {TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  }
}

export default connect(state => state)(TodoList);