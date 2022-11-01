import React, { Fragment } from "react";

const InputArea = ({ item, items, setItem, setItems }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default InputArea;
