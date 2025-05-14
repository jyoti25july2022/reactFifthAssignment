import { useSelector, useDispatch } from "react-redux";

import CardContainer from "../CardContainer/CardContainer";
import TodoForm from "../TodoForm/TodoForm";
import { addTodo } from "../../redux/todoSlice";

export default function TodoList() {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <TodoForm onAddTodo={handleAdd} />
      <CardContainer todos={todos} />
    </>
  );
}
