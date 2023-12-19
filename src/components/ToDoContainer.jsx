import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
// ✔

export default function ToDoContainer() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const getData = (data) => {
    setList([...list, data]);
  };
  const deleteItem = (item) => {
    const updatedList = [...completed];
    const index = completed.indexOf(item);
    console.log("index of item", index, item);
    updatedList.splice(index, 1);
    setCompleted(updatedList);
    console.log("Item deleted: ", index);
  };
  const completeTask = (item) => {
    setCompleted([...completed, item]);
    console.log(completed);
  };

  const completeAll = () => {
    setCompleted(list);
    console.log("All tasks completed", completed);
  };

  const clearAll = () => {
    setList([]);
    console.log("List cleared", list);
  };
  return (
    <div className="">
      <div className="flex justify-center gap-2">
        <span>Options: </span>
        <div className="flex gap-4">
          <Button
            onClick={completeAll}
            name={"Complete all task"}
            color={"blue-400"}
          />
          <Button onClick={clearAll} name={"Clear list"} color={"red-400"} />
        </div>
      </div>
      <ul className="pb-4">
        {list.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 border-b border-gray-300 text-2xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? deleteItem(item)
                    : completeTask(item)
                }
              >
                {item + (completed.includes(item) ? "✔" : "")}
              </span>
            </div>
          );
        })}
      </ul>
      <Form onSubmit={getData} />
    </div>
  );
}
