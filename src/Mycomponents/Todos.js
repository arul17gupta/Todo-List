import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  // console.log(props)

  return (
    <div className="container">
      <h3 className=' my-3'>Todos List </h3>
      {props.todos.length === 0 ? "No todos to display" : props.todos.map((element) => {
        return <TodoItem key={element.sno} todo={element} onDelete={props.onDelete} />
      })
      }

    </div>
  )
}
export default Todos;