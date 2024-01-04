import TimeSortedTasks from "./TimeSortedTasks";
import "react-datepicker/dist/react-datepicker.css";

export default function UppcommingView({
  list,
  completed,
  completeTask,
  deleteItem,
  selectedCategory,
}) {
  return (
    <div className="my-6 ">
      <div className="">
        <h1 className="text-5xl font-bold ">Upcoming Tasks</h1>
      </div>
      <div className="pt-6 flex flex-col gap-2 text-xl">
        <h2>This is a list with Your incoming tasks to do</h2>
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <TimeSortedTasks
          list={list}
          completed={completed}
          completeTask={completeTask}
          deleteItem={deleteItem}
          activeCategory={selectedCategory}
          showDate={true}
        />
      </div>
    </div>
  );
}
