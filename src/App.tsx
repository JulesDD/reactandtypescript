import React, {useState}from 'react';
import TodoList from './components/Todo';
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model';


const App: React.FC = () => {
  const [todos, setTodos] =useState<Todo[]>([]);

  const addHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {
      id: Math.random().toString(),
      text: text
    }
  ]);
  };

  const removeHandler = (todoId: string) => {
    setTodos(prevTodos =>{
      return prevTodos.filter( todo => todo.id !==todoId);
    });
  };


  return (
    <div className="App">
      <NewTodo onNewTodo={addHandler}/>
     <TodoList items={todos} onDeleteTodo ={removeHandler}/>
    </div>
  );
}

export default App;
