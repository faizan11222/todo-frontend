import React from "react";
import { List, Checkbox, Button, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const TodoItem = ({ todo, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <List.Item
      actions={[
        <Checkbox
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo._id, todo.completed)}
        />,
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteTodo(todo._id)}
        />,
      ]}
    >
      <Text className={todo.completed ? "completed" : ""}>{todo.text}</Text>
    </List.Item>
  );
};

export default TodoItem;
