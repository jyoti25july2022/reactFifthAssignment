import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddTodo({ title, description });
      setTitle("");
      setDescription("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
  