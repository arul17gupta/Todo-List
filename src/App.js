import './App.css';
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import { TodoItem } from "./Mycomponents/TodoItem";
import Todos from "./Mycomponents/Todos";
import { AddTodo } from "./Mycomponents/AddTodo";
import React, { useState } from 'react';

function App() {

  function onDelete(todo) {
    console.log("I am on delete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;

    sno = todos[todos.length - 1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([]);



  return (
    <>
      <img className='backimage' src="https://c4.wallpaperflare.com/wallpaper/707/220/899/gradient-blue-pink-abstract-art-wallpaper-preview.jpg" alt="" />
      <Header title="Mytodoslist" searchbar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>);
}

export default App;
