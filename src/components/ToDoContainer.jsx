import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import Statistics from "./Statistics";
import Categories from "./Categories";
import Task from "./Task";

export default function ToDoContainer() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getData = (data) => {
    setList([...list, [data[0], data[1]]]);
  };

  const getButtonData = (data) => {
    console.log("Active category", data);
    setSelectedCategory(data);
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
    <div className="flex flex-col flex-wrap">
      <Form onSubmit={getData} />
      <div className="flex justify-center items-center gap-2 pt-4">
        <span className="text-xs">Options: </span>
        <div className="flex gap-4">
          <Button name={"Complete all"} color={"blue-400"} task={completeAll} />
          <Button name={"Clear list"} color={"red-400"} task={clearAll} />
        </div>
      </div>
      <Statistics
        numberOfTasks={list.length}
        numberOfCompleted={completed.length}
      />
      <div className="w-[80%] mx-auto">
        <hr />
      </div>

      <Categories list={list} onButton={getButtonData} />

      <ul className="pb-4">
        <Task
          list={list}
          completed={completed}
          completeTask={completeTask}
          deleteItem={deleteItem}
          activeCategory={selectedCategory}
        />
      </ul>
    </div>
  );
}
