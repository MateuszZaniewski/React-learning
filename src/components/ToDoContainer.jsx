import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import Statistics from "./Statistics";

export default function ToDoContainer() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [category, setCategory] = useState([
    {
      homeTasks: [],
    },
    {
      workTasks: [],
    },
    {
      personalTasks: [],
    },
    {
      financeTasks: [],
    },
    {
      healthTasks: [],
    },
    {
      shoppingTasks: [],
    },
  ]);

  const getData = (data) => {
    setList([...list, data.item]);
  };
  const deleteItem = (item) => {
    const updatedList = [...completed];
    const index = completed.indexOf(item);
    updatedList.splice(index, 1);
    setCompleted(updatedList);
  };
  const completeTask = (item) => {
    setCompleted([...completed, item]);
  };

  const completeAll = () => {
    setCompleted(list);
  };

  const clearAll = () => {
    setList([]);
    setCompleted([]);
  };
  return (
    <div className="">
      <div className="flex justify-center items-center gap-2">
        <span>Options: </span>
        <div className="flex gap-4">
          <Button name={"Complete all"} color={"blue-400"} task={completeAll} />
          <Button name={"Clear list"} color={"red-400"} task={clearAll} />
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
      <Statistics
        numberOfTasks={list.length}
        numberOfCompleted={completed.length}
      />
    </div>
  );
}
