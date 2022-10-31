import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

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
            if (item !== "") {
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
          {items.map((listItem, i) => {
            return <li key={i}>{listItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
