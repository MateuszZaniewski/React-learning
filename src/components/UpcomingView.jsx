import TimeSortedTasks from "./TimeSortedTasks";
import "react-datepicker/dist/react-datepicker.css";

export default function UppcommingView({
  list,
  completed,
  completeTask,
  unCompleteItem,
  selectedCategory,
  deleteTask,
  categories,
  setCategories,
}) {
  return (
    <div className="my-6 ">
      <div className="">
        <h1 className="text-5xl font-bold ">Upcoming Tasks</h1>
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <TimeSortedTasks
          list={list}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          activeCategory={selectedCategory}
          deleteTask={deleteTask}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
    </div>
  );
}
