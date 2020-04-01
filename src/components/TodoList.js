import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ toggleTodoDone, todos, removeTodo }) => {
  return (
    <div>
      <ul className='list'>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              index={index}
              key={index}
              todo={todo}
              toggleTodoDone={toggleTodoDone}
              removeTodo={removeTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
