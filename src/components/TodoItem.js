import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ todo, index, toggleTodoDone, removeTodo }) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        onChange={(event) => toggleTodoDone(event, index)}
        checked={todo.done}
      />
      {/* <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'inherit'
        }}
      >
        {todo.title}
      </span> */}
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button className='btn' onClick={() => removeTodo(index)}>
        remove
      </button>
    </li>
  );
};

export default TodoItem;
