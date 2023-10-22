import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, message, notification } from "antd";
import {
  addTodo,
  fetchTodos,
  toggleTodo,
  deleteTodo,
  editTodo,
} from "./store/todos/todosSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const { Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
      notification["success"]({
        message: "Todo Added",
        description: `Successfully added "${newTodo}" to your todo list.`,
        duration: 3, // Duration in seconds
        style: { width: 320 },
      });
    } else {
      notification["error"]({
        message: "Error",
        description: `Todo text can't be empty.`,
        duration: 3,
        style: { width: 320 }, // Set the width for a smaller notification
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id, completed) => {
    dispatch(toggleTodo({ id, completed: !completed }));
    notification["info"]({
      message: "Todo Updated",
      description: `Todo status has been changed.`,
      duration: 3,
      style: { width: 320 }, // Set the width for a smaller notification
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    notification["warning"]({
      message: "Todo Deleted",
      description: `Todo has been removed from the list.`,
      duration: 3,
      style: { width: 320 }, // Set the width for a smaller notification
    });
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
    setEditingText(todo.text);
  };

  const handleUpdateTodo = () => {
    if (editingText.trim()) {
      dispatch(editTodo({ ...editingTodo, text: editingText }));
      setEditingTodo(null);
      setEditingText("");
      message.success("Todo updated successfully!");
    } else {
      message.error("Please enter a valid todo!");
    }
  };

  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdateTodo();
    }
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", maxWidth: "600px", margin: "0 auto" }}>
        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
          handleKeyDown={handleKeyDown}
        />
        <TodoList
          todos={todos.filter((todo) => !todo.completed)}
          title="Remaining"
          isEditAble
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
          editingTodo={editingTodo}
          editingText={editingText}
          setEditingText={setEditingText}
          startEditing={startEditing}
          handleUpdateTodo={handleUpdateTodo}
          handleEditKeyDown={handleEditKeyDown}
        />
        <TodoList
          todos={todos.filter((todo) => todo.completed)}
          title="Completed"
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </Content>
    </Layout>
  );
};

export default App;
