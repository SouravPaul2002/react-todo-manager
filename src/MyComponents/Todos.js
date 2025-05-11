import React from 'react';
import TodoItems from "./TodoItems";
import { EditTodo } from './EditTodo';

export default function Todos(props) {
  return (
    <div className="container">
      <div className="text-center my-1"><h3>All Todo-Lists here</h3></div>
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo) => {
          return (
            
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} editTodo={props.editTodo}/>
          );
        })
      )}
    </div>
  );
}
