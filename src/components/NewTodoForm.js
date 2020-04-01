import React from 'react';
import './NewTodoForm.scss';

const NewTodoForm = ({ formSubmitted, onTodoChanged, newTodo }) => {
  return (
    <div className='todoForm'>
      <form onSubmit={formSubmitted}>
        <label className='todoForm__label' htmlFor='NewTodo'>
          TODO
        </label>
        <input
          className='todoForm__input'
          onChange={onTodoChanged}
          id='NewTodo'
          name='NewTodo'
          value={newTodo}
        />
        <button className='btn' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
