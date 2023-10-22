import React from "react";
import { Input, Button } from "antd";

const TodoInput = ({ newTodo, setNewTodo, handleAddTodo, handleKeyDown }) => {
  return (
    <div>
      <Input
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "70%", marginRight: "10px" }}
      />
      <Button type="primary" onClick={handleAddTodo} onKeyDown={handleKeyDown}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
