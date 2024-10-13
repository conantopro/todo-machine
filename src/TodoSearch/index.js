import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <input 
      placeholder="Cebolla" 
      className='TodoSearch' 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
        console.log(event.target.value)
      }} 
    />
  )
}

export { TodoSearch }