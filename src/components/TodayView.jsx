import Task from "./Task";
import getDate from "../helperFunctions/currentDate";

export default function TodayView({
  list,
  completed,
  completeTask,
  deleteItem,
  selectedCategory,
}) {
  const todaysTasks = () => {
    return list.filter((task) => {
      return task[2] === getDate();
    });
  };

  return (
    <div className="my-6 ">
      <div className="">
        <h1 className="text-5xl font-bold ">Today Tasks</h1>
      </div>
      <div className="pt-6 flex flex-col gap-2 text-xl">
        <h2>
          {list.length < 1 ? "You have no tasks today" : ""}
          {list.length > 0
            ? `Completed tasks today ${completed.length}/${
                todaysTasks().length
              }`
            : ""}
        </h2>
      </div>
      <div className="flex justify-start overflow-y-auto max-h-[75vmin]">
        <Task
          list={todaysTasks()}
          completed={completed}
          completeTask={completeTask}
          deleteItem={deleteItem}
          activeCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
