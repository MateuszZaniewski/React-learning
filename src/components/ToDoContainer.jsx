import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
import Statistics from "./Statistics";
import Categories from "./Categories";
import Task from "./Task";
import Lists from "./Lists";
import up from "../assets/up.png";
import down from "../assets/down.png";
import Settings from "./Settings";
import DetailsView from "./DetailsView";

export default function ToDoContainer() {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategories, setShowCategories] = useState(true);
  const [activeListsTab, setActiveListsTab] = useState("Today");

  const getData = (data) => {
    setList([...list, data]);
  };

  const handleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleActiveListsTab = (data) => {
    setActiveListsTab(data);
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
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:flex mx-auto">
        <div className="w-[28vw] max-w-[400px] h-[95vmin] overflow-x-hidden bg-gray-100 rounded-tl-xl rounded-bl-xl my-5 no-scrollbar">
          <div className="flex flex-col bg-gray-200 mx-6 rounded-xl my-6">
            <h2 className="pt-5 pl-5 text-black font-bold text-lg">
              Dashboard
            </h2>

            <div className="rounded-xl w-[90%] mx-auto my-5">
              <h3 className="uppercase text-sm px-2 py-2 font-bold">Tasks</h3>
              <Form onSubmit={getData} />
            </div>

            <div className="rounded-xl w-[90%] mx-auto my-5">
              <h3 className="uppercase text-sm px-2 py-2 font-bold">Lists</h3>
              <Lists
                activeListsTab={activeListsTab}
                onChangeActiveList={handleActiveListsTab}
              />
            </div>
            <div className="rounded-xl w-[90%] mx-auto">
              <div
                onClick={() => handleCategories()}
                className="flex items-center justify-between"
              >
                <h3 className="uppercase text-sm px-2 py-2 font-bold">
                  Categories
                </h3>
                <img src={showCategories ? up : down} className="h-6 w-6" />
              </div>
              <div className={showCategories ? "block" : "hidden"}>
                <Categories list={list} onButton={getButtonData} />
              </div>
            </div>
            <div className="rounded-xl w-[90%] mx-auto my-5">
              <div className="flex items-center">
                <h3 className="uppercase text-sm px-2 py-2 font-bold">
                  Settings
                </h3>
              </div>
              <Settings />
            </div>
          </div>
        </div>
        <div className="w-[72vw] max-w-[900px] h-[95vmin] bg-gray-100 rounded-tr-xl rounded-br-xl my-5 overflow-x-hidden">
          <DetailsView
            activeTab={activeListsTab}
            list={list}
            completed={completed}
            completeTask={completeTask}
            deleteItem={deleteItem}
            activeCategory={selectedCategory}
          />
        </div>
      </div>
      <div className="lg:hidden">
        <Form onSubmit={getData} />
        <div className="flex justify-center items-center gap-2 pt-4">
          <span className="text-xs">Options: </span>
          <div className="flex gap-4">
            <Button
              name={"Complete all"}
              color={"blue-400"}
              task={completeAll}
            />
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
    </div>
  );
}
