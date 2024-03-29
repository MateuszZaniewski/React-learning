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
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([
    { name: "All", count: 0, color: "bg-[#F4EFEF]" },
    { name: "Home", count: 0, color: "bg-[#845EC2]" },
    { name: "Health", count: 0, color: "bg-[#D65DB1]" },
    { name: "Finance", count: 0, color: "bg-[#FF6F91]" },
    { name: "Personal", count: 0, color: "bg-[#FF9671]" },
    { name: "Work", count: 0, color: "bg-[#FFC75F]" },
    { name: "Shopping", count: 0, color: "bg-[#F9F871]" },
  ]);

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
    setSelectedCategory(data);
  };

  const unCompleteItem = (item) => {
    const updatedList = [...completed];
    const index = completed.indexOf(item);
    updatedList.splice(index, 1);
    setCompleted(updatedList);
  };
  const completeTask = (item) => {
    setCompleted([...completed, item]);
  };

  const deleteTask = (item) => {
    const updatedList = list.filter((task) => task !== item);
    setList(updatedList);
    const updatedCompleted = completed.filter((task) => task !== item);
    setCompleted(updatedCompleted);
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
              <Form onSubmit={getData} categories={categories} />
            </div>

            <div className="rounded-xl w-[90%] mx-auto my-5">
              <h3 className="uppercase text-sm px-2 py-2 font-bold">Lists</h3>
              <Lists
                activeListsTab={activeListsTab}
                onChangeActiveList={handleActiveListsTab}
              />
            </div>
            <div className="rounded-xl w-[90%] mx-auto relative">
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
                <Categories
                  list={list}
                  onButton={getButtonData}
                  categories={categories}
                  setCategories={setCategories}
                />
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
            unCompleteItem={unCompleteItem}
            activeCategory={selectedCategory}
            deleteTask={deleteTask}
            notes={notes}
            setNotes={setNotes}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      </div>
      <div className="lg:hidden bg-gray-100 w-[90%] mx-auto rounded-lg lg:h-[90vmax] max-w-[500px]">
        <Form onSubmit={getData} categories={categories} />
        <div className="flex justify-center items-center flex-wrap gap-2 py-4">
          <span className="text-xs">Options: </span>
          <div className="flex gap-4">
            <Button
              name={"Complete all"}
              color={"bg-[#2b7a40]"}
              task={completeAll}
            />
            <Button
              name={"Clear list"}
              color={"bg-[#9e2333]"}
              task={clearAll}
            />
          </div>
        </div>
        <Statistics
          numberOfTasks={list.length}
          numberOfCompleted={completed.length}
        />
        <div className="w-[80%] mx-auto">
          <hr />
        </div>

        <Categories
          list={list}
          onButton={getButtonData}
          categories={categories}
          setCategories={setCategories}
        />

        <div
          className={
            list.length < 1
              ? "hidden"
              : "block max-h-[50vmax] h-[100vh] md:max-h-[55vmax] lg:max-h-[60vmax] overflow-clip"
          }
        >
          <ul className="lg:pb-4 flex justify-start lg:justify-center max-h-[60vmax] overflow-y-auto">
            <Task
              list={list}
              completed={completed}
              completeTask={completeTask}
              unCompleteItem={unCompleteItem}
              activeCategory={selectedCategory}
              deleteTask={deleteTask}
              categories={categories}
              setCategories={setCategories}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
