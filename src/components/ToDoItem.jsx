import React from "react";

const ToDoItem = ({ id, text, onCheck }) => {
  return (
    <li
      onClick={() => {
        onCheck(id);
      }}
      id={id}
    >
      {text}
    </li>
  );
};

export default ToDoItem;
