import React, { useState } from "react";

const ToDoItem = ({ listItem, index }) => {
  const [crossed, setCrossed] = useState(false);

  return (
    <li
      style={crossed ? { textDecorationLine: "line-through" } : {}}
      onClick={() => setCrossed(!crossed)}
      key={index}
    >
      {listItem}
    </li>
  );
};

export default ToDoItem;
