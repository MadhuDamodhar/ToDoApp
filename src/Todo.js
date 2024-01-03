import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from './Action';

function Todo({ id, title }) {
  const [edit, setEdit] = useState(false);
  const [newTitle, setTitle] = useState(title);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (newTitle.trim()) {
      dispatch(updateTodo({ id: id, title: newTitle }));
      setEdit(false);
    }
  };

  const handleDelete = () => {
   
    dispatch(deleteTodo(id));
    
  };

  return (
    <>
      {edit ? (
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            value={newTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleClick}>
            Save
          </button>
        </div>
      ) : (
        <li className='list-group-item'>
          <p>{title}</p>
          <div className='actions'>
            <button className='btn btn-warning' onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className='btn btn-danger' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default Todo;
