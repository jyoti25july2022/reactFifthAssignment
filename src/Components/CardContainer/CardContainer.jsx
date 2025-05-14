import Card from "../Card/Card";

export default function CardContainer({ todos }) {
  return (
    <div className="card-container">
      {todos.map(todo => (
        <Card
          key={todo.id}
          image="https://via.placeholder.com/150"
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}
