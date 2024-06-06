import React from 'react';
import './App.css';
import Card from './components/Card';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todoInput, setTodoInput] = React.useState('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function addTodo() {
    setTodos((previousTodos) => [
      ...previousTodos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);

    setTodoInput('')
  }

  function handleInputChange(e) {
    setTodoInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Fazer café"
          value={todoInput}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      {todos.map((todo: Todo) => {
        return <Card key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
