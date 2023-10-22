import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todosAPI from "../../api/todosAPI";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await todosAPI.getAllTodos();
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const response = await todosAPI.addTodo(text);
  return response.data;
});

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async ({ id, completed }) => {
    const response = await todosAPI.updateTodo(id, { completed });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await todosAPI.deleteTodo(id);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.findIndex(
          (todo) => todo._id === action.payload._id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
