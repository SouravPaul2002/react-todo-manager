import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { EditTodo } from './MyComponents/EditTodo';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← Required for toggle



function App() {
  const navigate = useNavigate();
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const addTodo = (title, desc) => {
    // console.log("im adding this Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // localStorage.getItem("todos");
  }

  const editTodo =(todo) =>{
    console.log("im editing this Todo", todo);
    navigate("/editTodo", { state: { todo } });
  }
    
  return (
    <>
    
      <Header title='My Todos List' searchBar={true} />

      <Routes>
        {/* Home Route */}
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} editTodo={editTodo} />
          </>
        } />
        
        {/* About Route */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/editTodo" element={<EditTodo />} />
      </Routes>



      {/* <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> */}
      <Footer />

    </>
  );
}

export default App;
