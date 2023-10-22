import axios from "axios";

const BASE_URL = "http://localhost:8080/api/todos";

const todosAPI = {
  // Fetch all todos
  getAllTodos: () => axios.get(BASE_URL),

  // Add a new todo
  addTodo: (text) => axios.post(BASE_URL, { text }),

  // Fetch a single todo by its ID
  getTodoById: (id) => axios.get(`${BASE_URL}/${id}`),

  // Update a todo by its ID
  updateTodo: (id, updatedData) => axios.put(`${BASE_URL}/${id}`, updatedData),

  // Update a todo by its ID
  toggleTotdo: (id, updatedData) =>
    axios.patch(`${BASE_URL}/${id}`, updatedData),

  // Delete a todo by its ID
  deleteTodo: (id) => axios.delete(`${BASE_URL}/${id}`),
};

export default todosAPI;
