import { useState } from "react";

export default function ToDoContainer() {
  const [item, setItem] = useState({
    name: "",
    completed: false,
  });
  const [list, setList] = useState([
    {
      name: "Dedożek",
      completed: false,
    },
    {
      name: "Dąbromir",
      completed: true,
    },
  ]);

  function addItem(e) {
    e.preventDefault();
  }
  return (
    <div className="">
      {list.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
      <form>
        <input></input>
        <input></input>
        <button onClick={(e) => addItem(e)}>Add item</button>
      </form>
    </div>
  );
}
