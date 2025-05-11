import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/EditTodo.css';

export const EditTodo = () => {
  const { state } = useLocation();
  const navigate= useNavigate();
  const todo = state?.todo;

  const [title , settitle]= useState(todo.title || "");
  const [desc , setdesc]= useState(todo.desc || "");

  const handleTitleChange = (e) => settitle(e.target.value);
  const handleDescChange = (e) => setdesc(e.target.value);

  // handling the edit 
  const handleEdit=()=>{

    const editedTodo= {...todo,title,desc}; // storing the edited todo in editedTodo 
  const existingTodos= JSON.parse(localStorage.getItem("todos")) || []; // Retrieve existing todos from localStorage
  const updateTodos= existingTodos.map(t =>t.sno===editedTodo.sno ? editedTodo : t); // Replace the old todo with the updated one

  localStorage.setItem("todos",JSON.stringify(updateTodos));

  // navigate("/");
  window.location.href = '/';

  }
  if (!todo) {
    return <div>No todo selected to edit.</div>;
  }

    return (
      <div className="edit-todo-container">
      <h2>Edit Todo</h2>
      <div className="edit-card">
        <div className="edit-form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" defaultValue={todo.title} onChange={handleTitleChange} className="edit-input" placeholder="Enter title" />
        </div>

        <div className="edit-form-group">
          <label htmlFor="desc">Description</label>
          <textarea id="desc" defaultValue={todo.desc} onChange={handleDescChange} className="edit-textarea" rows="5" placeholder="Enter description"></textarea>
        </div>

        <div className="edit-btn-group">
          <button className="edit-btn primary" onClick={handleEdit}>Save</button>
          <Link className="edit-btn secondary back-but" to="/">Back</Link>
        </div>
      </div>
    </div>
    )
  
}
