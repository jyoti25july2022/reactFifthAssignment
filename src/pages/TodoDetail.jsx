// src/pages/TodoDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.items.find((item) => item.id === id)
  );

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default TodoDetail;
