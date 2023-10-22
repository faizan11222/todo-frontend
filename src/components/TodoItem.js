import React from "react";
import { List, Checkbox, Button, Typography, Input } from "antd";
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const { Text } = Typography;

const TodoItem = ({
  todo,
  handleToggleTodo,
  handleDeleteTodo,
  editingTodo,
  editingText,
  setEditingText,
  startEditing,
  handleUpdateTodo,
  handleEditKeyDown,
  isEditAble,
}) => {
  return (
    <List.Item
      actions={[
        <Checkbox
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo._id, todo.completed)}
        />,
        editingTodo?._id === todo._id ? (
          <Button
            type="link"
            icon={<SaveOutlined />}
            onClick={handleUpdateTodo}
          />
        ) : (
          <Button
            type="link"
            icon={<EditOutlined />}
            disabled={!isEditAble}
            onClick={() => startEditing(todo)}
          />
        ),
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteTodo(todo._id)}
        />,
      ]}
    >
      {isEditAble && editingTodo?._id === todo._id ? (
        <Input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={handleEditKeyDown}
          style={{ width: "100%" }}
        />
      ) : (
        <Text className={todo.completed ? "completed" : ""}>{todo.text}</Text>
      )}
    </List.Item>
  );
};

export default TodoItem;
