// TodoList.js
import React from "react";
import { List, Checkbox, Button } from "antd";

const TodoList = ({ todos, title, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <div>
      <h2>{title}</h2>
      <List
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Checkbox
                checked={item.completed}
                onChange={() => handleToggleTodo(item._id, item.completed)}
                data-testid={`checkbox-${item._id}`}
              />,
              <Button
                onClick={() => handleDeleteTodo(item._id)}
                data-testid={`delete-button-${item._id}`}
              >
                Delete
              </Button>,
            ]}
          >
            <span className={item.completed ? "completed" : ""}>
              {item.text}
            </span>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
