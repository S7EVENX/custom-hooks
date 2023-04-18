import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


//Obtener datos del local storage
const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }


export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Nuevo Todo
  const handleNewTodo = (todo) => {
    // console.log({todo});
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  //Borrar Todo
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  //Hecho Todo
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

 

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
