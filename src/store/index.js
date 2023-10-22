import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer, // Add your todos reducer to the store
  },
});

export default store;
