import React from "react";
import { List, Divider } from "antd";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  title,
  handleToggleTodo,
  handleDeleteTodo,
  ...props
}) => {
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
            {...props}
          />
        )}
      />
    </>
  );
};

export default TodoList;
