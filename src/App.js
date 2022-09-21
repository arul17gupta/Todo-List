import './App.css';
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import {TodoItem} from "./Mycomponents/TodoItem";
import Todos  from "./Mycomponents/Todos";
import {AddTodo}  from "./Mycomponents/AddTodo";
import React, { useState } from 'react';

function App() {

function onDelete(todo){
  console.log("I am on delete of todo" , todo);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}

  
const [todos, setTodos] = useState([
  {
    sno:  1,
    title: "Go to the market",
    desc: "You need to go to the market to gt this job done 1"

  },
  {
    sno:  2,
    title: "Go to the mall",
    desc: "You need to go to the market to get this job done 2"

  },
  {
    sno:  3,
    title: "Go to the garden",
    desc: "You need to go to the market to get this job done 3"

  },
 
]);



  return (
    <>
      <Header title = "Mytodoslist" searchbar = {false}/>
      <AddTodo/>
      <Todos todos ={todos} onDelete = {onDelete} />
      
      <Footer/>
    </>);
}

export default App;
