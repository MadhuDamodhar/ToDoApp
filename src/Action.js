export function addTodo(todo){
return{type:'ADD_TODO',payload:todo};
}
export function updateTodo(todo){
  return{type:'EDIT_TODO',payload:todo};
  }
  export function deleteTodo(id){
    return{type:'DELETE_TODO',payload:id};
    }