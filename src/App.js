import { useState } from 'react';
import {addTodo} from './Action'
import './App.css';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';

function App() {
  const [todo,setTodo]=useState('')
  const dispatch=useDispatch();
  const handleTodo=()=>{
    if(todo.trim()){
    dispatch(addTodo(todo))
      setTodo("")
      
    }
  }
  return (
   <div className='container mt-5 w-50'>
   <h1 className='text-primary text-center'>TODO APP USING REACT-REDUX</h1>
     <div className='form-group'>
     <input type='text' className='form-control' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button className='btn btn-primary' onClick={()=>handleTodo()}>Add</button>
     
     </div>
    <TodoList/>
   </div>
  );
}

export default App;
