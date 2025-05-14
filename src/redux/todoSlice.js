import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: []
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(todo) {
        return {
          payload: {
            id: nanoid(),
            ...todo,
            completed: false
          }
        }
      }
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    updateTodo(state, action) {
      const index = state.items.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    }
  }
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
