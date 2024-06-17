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
  const [todos, setTodos] = React.useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos) {
      return JSON.parse(storedTodos);
    }

    return [];
  });

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    setTodos((previousTodos) => [
      ...previousTodos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);

    setTodoInput('');
  }

  function completeTodo(id: number) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) => {
        return todo.id !== id ? todo : { ...todo, completed: !todo.completed };
      }),
    );
  }

  function deleteTodo(id: number) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id))
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
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
        return <Card key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>;
      })}
    </div>
  );
}

export default App;
