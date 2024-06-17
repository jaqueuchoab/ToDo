// Organização de pasta diferente: Para cada componente cria-se uma pasta, o componente principal se chamará index, e os demais podem ser estilos ou pequenas partes deste componente. Portanto, na importanção o nome do arquivo fica implicito e o que vale é o export.
import { Todo } from '../../App';
import './style.css';

type CardProps = {
  todo: Todo;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Card = ({ todo, completeTodo, deleteTodo }: CardProps) => {
  return (
    <div className={`card ${todo.completed ? 'done' : ''}`}>
      <h2>{todo.title}</h2>
      <div className="card-buttons">
        <button onClick={() => {completeTodo(todo.id)}}>{todo.completed ? 'Retormar' : 'Completar'}</button>
        <button onClick={() => {deleteTodo(todo.id)}}>Deletar</button>
      </div>
    </div>
  );
};

export default Card;
