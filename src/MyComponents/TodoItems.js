import React from 'react'
import { Link } from 'react-router-dom'; 


export default function TodoItems({todo , onDelete}) {
  return (
    <div>
      <div className="card my-3">
  <div className="card-header">
    <h6>Todo {todo.sno}</h6>
  </div>
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button href="#" type='button' className="btn btn-sm btn-danger mx-1" onClick={()=>onDelete(todo)}>Delete</button>
    {/* <Link to="/editTodo" type='button' className="btn btn-sm btn-success mx-1" onClick={()=>editTodo(todo)}>Edit</Link> */}
     <Link to="/editTodo" state={{ todo }} className="btn btn-sm btn-success mx-1">Edit</Link>
  </div>
</div>
    </div>
  )
}
