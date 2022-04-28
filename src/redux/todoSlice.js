import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false, editable: false },
    { id: 2, title: "todo2", completed: false, editable: false },
    { id: 3, title: "todo3", completed: false, editable: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        editable: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleEdit: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].editable = action.payload.editable;
    },
    showDone: (state, action) => {
      const filterDone = state.filter((todo) => todo.completed === true);
      if (filterDone.length > 0) {
        return filterDone;
      } else return state;
    },
    showAll: (state, action) => {
      return state;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  toggleEdit,
  showDone,
  showAll,
} = todoSlice.actions;

export default todoSlice.reducer;
