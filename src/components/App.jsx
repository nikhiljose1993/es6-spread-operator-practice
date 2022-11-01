import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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
      <InputArea
        item={item}
        items={items}
        setItem={setItem}
        setItems={setItems}
      />
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
