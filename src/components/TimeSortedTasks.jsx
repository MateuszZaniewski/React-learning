import getDate from "../helperFunctions/currentDate";
import formatDate from "../helperFunctions/formatDate";
import nextDay from "../helperFunctions/nextDay";
import thisWeekDays from "../helperFunctions/thisWeekDays";
import thisMonthDays from "../helperFunctions/thisMonthsDates";
import Task from "./Task";

export default function TimeSortedTasks({
  list,
  completed,
  completeTask,
  unCompleteItem,
  deleteTask,
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
        <h2 className="text-4xl pt-10">Today</h2>
        <Task
          list={todaysTasks()}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          showDate={false}
          deleteTask={deleteTask}
        />
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10">Tomorow</h2>
        <Task
          list={tomorowTasks()}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          showDate={false}
          deleteTask={deleteTask}
        />
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10">This week</h2>
        <Task
          list={thisWeekTasks()}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          showDate={false}
          deleteTask={deleteTask}
        />
      </div>
      <div className="flex flex-col items-start border-b-2 w-[90%]">
        <h2 className="text-4xl pt-10">This month</h2>
        <Task
          list={thisMonthTasks()}
          completed={completed}
          completeTask={completeTask}
          unCompleteItem={unCompleteItem}
          showDate={false}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
