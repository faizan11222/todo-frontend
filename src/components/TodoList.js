import React from "react";
import { List, Divider } from "antd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, title, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <>
      <Divider>{title}</Divider>
      <List
        dataSource={todos}
        renderItem={(item) => (
          <TodoItem
            todo={item}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      />
    </>
  );
};

export default TodoList;
