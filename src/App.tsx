import React from 'react';
import './App.css';
import Card from './components/Card';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  return (
    <div className="App">
      <div className="add-todo">
        <input type="text" placeholder="Fazer café" />
        <button>Adicionar</button>
      </div>

      {todos.map((todo: Todo) => {
        return <Card key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
