import { useState } from "react";
import Form from "./Form";
// ✔

export default function ToDoContainer() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const getData = (data) => {
    setList([...list, data]);
  };
  const deleteItem = (index) => {
    console.log("Item deleted: ", index);
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };
  const completeTask = (item) => {
    setCompleted([...completed, item]);
    console.log(completed);
  };
  return (
    <div className="">
      <ul className="pb-4">
        {list.map((item, index) => (
          <div key={index} className="flex gap-2 justify-center items-center">
            <span onClick={() => completeTask(item)}>{item}</span>
            <button
              className="border border-blue-400 bg-blue-400 px-2 py-1 rounded-xl text-white"
              onClick={() => deleteItem(index)}
            >
              X
            </button>
          </div>
        ))}
      </ul>
      <Form onSubmit={getData} />
    </div>
  );
}
