import Task from "./Task";

export default function TodayView({
  list,
  completed,
  completeTask,
  deleteItem,
  selectedCategory,
}) {
  console.log(list);

  return (
    <div className="my-6 ">
      <div className="">
        <h1 className="text-5xl font-bold ">Today Tasks</h1>
      </div>
      <div className="pt-4 flex flex-col gap-2 text-xl">
        <h2>Number of Today Tasks: {list.length}</h2>
        <h2>Number of Completed Tasks: {completed.length}</h2>
      </div>
      <div className="flex justify-start overflow-y-auto max-h-[75vmin]">
        <Task
          list={list}
          completed={completed}
          completeTask={completeTask}
          deleteItem={deleteItem}
          activeCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
