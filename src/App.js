import React, { useState } from "react";
import ToDoCmpnt from "./ToDoCmpnt";
import "./index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    setItems((prevValue) => [...prevValue, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
           <ToDoCmpnt
           text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
