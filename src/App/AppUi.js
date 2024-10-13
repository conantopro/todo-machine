import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
      <>
        <TodoCounter />
        <TodoSearch />
  
        <TodoList>
          {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
          {error && <TodosError />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completedTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        {/* <CreateTodoButton onClick={setOpenModal(!openModal)} /> */}
        <CreateTodoButton setOpenModal = {setOpenModal} />

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </>
  );
}

export { AppUI };
