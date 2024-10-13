import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

const TodoCounter = () => {
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext)

  return (
    completedTodos === totalTodos ?
      <h1 className='TodoCounter TodoCounter--completed'>
        <span>Felicidades, completaste todas las tareas!</span>
      </h1>

      :

      <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
  )
}

export { TodoCounter }
