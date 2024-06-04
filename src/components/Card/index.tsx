// Organização de pasta diferente: Para cada componente cria-se uma pasta, o componente principal se chamará index, e os demais podem ser estilos ou pequenas partes deste componente. Portanto, na importanção o nome do arquivo fica implicito e o que vale é o export.
type CardProps = {
  title: string;
}

const Card = ({ title } : CardProps) => {
  return <div>{title}</div>;
};

export default Card;
