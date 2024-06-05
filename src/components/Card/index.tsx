// Organização de pasta diferente: Para cada componente cria-se uma pasta, o componente principal se chamará index, e os demais podem ser estilos ou pequenas partes deste componente. Portanto, na importanção o nome do arquivo fica implicito e o que vale é o export.
import { Todo } from '../../App';
import './style.css';

type CardProps = {
  todo: Todo;
};

const Card = ({ todo }: CardProps) => {
  return (
    <div className="card">
      <h2>{todo.title}</h2>
      <div className="card-buttons">
        <button>Completar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
};

export default Card;
