import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoList } from './components';

import './App.scss';

const defaultTodos = [
  {
    id: uuid(),
    title: 'Adhd moore dodos',
  },
];

const App = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <h1 data-testid="app-title">EL TODOOOOOOOOOOOOOO</h1>
      <TodoList todos={todos} onTodoAdd={addTodo} onTodoRemove={removeTodo} />
    </main>
  );
};

export default App;
