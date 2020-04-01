import React, { Component } from 'react';
import './App.scss';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: `To-Do List`,
      newTodo: '',
      todos: [
        {
          title: 'build todos app',
          done: false
        },
        {
          title: 'make app good',
          done: false
        }
      ]
    };
  }

  onTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // mengkopi array
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    }; // mengkopi todo item

    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map((todo) => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    const year = new Date().getFullYear();
    return (
      <div className='container'>
        <div className='todo'>
          <h2 className='todo__header'>{this.state.message}</h2>
          <NewTodoForm
            newTodo={this.state.newTodo}
            onTodoChanged={this.onTodoChanged.bind(this)}
            formSubmitted={this.formSubmitted.bind(this)}
          />
          <TodoList
            todos={this.state.todos}
            toggleTodoDone={this.toggleTodoDone.bind(this)}
            removeTodo={this.removeTodo.bind(this)}
          />
          <button className='btn' onClick={() => this.allDone()}>
            All done
          </button>
          {/* footer */}
          <footer className='footer'>
            build with &hearts; by ubay &copy;{year}
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
