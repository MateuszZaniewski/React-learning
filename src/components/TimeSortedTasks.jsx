import getDate from "../helperFunctions/currentDate";
import formatDate from "../helperFunctions/formatDate";
import nextDay from "../helperFunctions/nextDay";
import thisWeekDays from "../helperFunctions/thisWeekDays";
import thisMonthDays from "../helperFunctions/thisMonthsDates";
import Task from "./Task";
import NoTasksInfo from "./NoTasksInfo";

export default function TimeSortedTasks({
  list,
  completed,
  completeTask,
  unCompleteItem,
  deleteTask,
  categories,
  setCategories,
}) {
  // Works, returns today tasks
  const todaysTasks = () => {
    return list.filter((task) => {
      return getDate() === formatDate(task[2]);
    });
  };

  // Works, returns tomorrow tasks
  const tomorowTasks = () => {
    const tomorrow = formatDate(nextDay());
    return list.filter((task) => {
      return tomorrow === formatDate(task[2]);
    });
  };
  // Works, returns all task from current week
  const thisWeekTasks = () => {
    const daysArray = thisWeekDays().map((day) => {
      return (day = formatDate(day));
    });
    return list.filter((value) => daysArray.includes(formatDate(value[2])));
  };

  // Works returns all tasks from current month
  const thisMonthTasks = () => {
    const daysArray = thisMonthDays().map((day) => {
      return (day = formatDate(day));
    });
    return list.filter((value) => daysArray.includes(formatDate(value[2])));
  };

  return (
    <div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10 font-poppins">Today</h2>
        <div className={todaysTasks().length > 0 ? "block" : "hidden"}>
          <Task
            list={todaysTasks()}
            completed={completed}
            completeTask={completeTask}
            unCompleteItem={unCompleteItem}
            showDate={false}
            deleteTask={deleteTask}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
        <div className={todaysTasks().length < 1 ? "block" : "hidden"}>
          <NoTasksInfo day={"today"} />
        </div>
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10 font-poppins">Tomorrow</h2>
        <div className={tomorowTasks().length > 0 ? "block" : "hidden"}>
          <Task
            list={tomorowTasks()}
            completed={completed}
            completeTask={completeTask}
            unCompleteItem={unCompleteItem}
            showDate={false}
            deleteTask={deleteTask}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
        <div className={tomorowTasks().length < 1 ? "block" : "hidden"}>
          <NoTasksInfo day={"tomorrow"} />
        </div>
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10 font-poppins">This week</h2>
        <div className={thisWeekTasks().length > 0 ? "block" : "hidden"}>
          <Task
            list={thisWeekTasks()}
            completed={completed}
            completeTask={completeTask}
            unCompleteItem={unCompleteItem}
            showDate={false}
            deleteTask={deleteTask}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
        <div className={thisWeekTasks().length < 1 ? "block" : "hidden"}>
          <NoTasksInfo day={"this week"} />
        </div>
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10 font-poppins">This month</h2>
        <div className={thisMonthTasks().length > 0 ? "block" : "hidden"}>
          <Task
            list={thisMonthTasks()}
            completed={completed}
            completeTask={completeTask}
            unCompleteItem={unCompleteItem}
            showDate={false}
            deleteTask={deleteTask}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
        <div className={thisMonthTasks().length < 1 ? "block" : "hidden"}>
          <NoTasksInfo day={"this month"} />
        </div>
      </div>
    </div>
  );
}
