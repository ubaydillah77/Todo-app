import React from 'react';
import './NewTodoForm.scss';

const NewTodoForm = ({ formSubmitted, onTodoChanged, newTodo }) => {
  return (
    <div>
      <form className='todoForm' onSubmit={formSubmitted}>
        <label htmlFor='NewTodo'>New Todo </label>
        <input
          onChange={onTodoChanged}
          id='NewTodo'
          name='NewTodo'
          value={newTodo}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
