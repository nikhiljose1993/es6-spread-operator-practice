import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    const newItems = items.filter((items, index) => {
      return index !== id;
    });
    setItems(newItems);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(event) => {
            setItem(event.target.value);
          }}
          type="text"
          placeholder="Enter your list item"
          value={item}
        />
        <button
          onClick={() => {
            if (item?.trim() !== "") {
              setItems([...items, item]);
              setItem("");
            }
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((listItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={listItem}
                onCheck={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
