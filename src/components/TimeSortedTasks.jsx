import getDate from "../helperFunctions/currentDate";
import formatDate from "../helperFunctions/formatDate";
import nextDay from "../helperFunctions/nextDay";
import thisWeekDays from "../helperFunctions/thisWeekDays";
import thisMonthDays from "../helperFunctions/thisMonthsDates";
import Dropplet from "./Dropplet";

export default function TimeSortedTasks({
  list,
  completed,
  completeTask,
  deleteItem,
  showDate,
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
      <div>
        <h2>Today</h2>
        {todaysTasks().map((item, index) => {
          return (
            <div
              key={index}
              className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto`}
            >
              <Dropplet category={item[1]} />
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 text-xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? deleteItem(item)
                    : completeTask(item)
                }
              >
                {item[0]}
              </span>
              <span>{showDate ? item[2].toString() : ""}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Tomorow</h2>
        {tomorowTasks().map((item, index) => {
          return (
            <div
              key={index}
              className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto`}
            >
              <Dropplet category={item[1]} />
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 text-xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? deleteItem(item)
                    : completeTask(item)
                }
              >
                {item[0]}
              </span>
              <span>{showDate ? item[2].toString() : ""}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2>This week</h2>
        {thisWeekTasks().map((item, index) => {
          return (
            <div
              key={index}
              className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto`}
            >
              <Dropplet category={item[1]} />
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 text-xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? deleteItem(item)
                    : completeTask(item)
                }
              >
                {item[0]}
              </span>
              <span>{showDate ? item[2].toString() : ""}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2>This month</h2>
        {thisMonthTasks().map((item, index) => {
          return (
            <div
              key={index}
              className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg gap-5 w-[90%] mx-auto`}
            >
              <Dropplet category={item[1]} />
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 text-xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? deleteItem(item)
                    : completeTask(item)
                }
              >
                {item[0]}
              </span>
              <span>{showDate ? item[2].toString() : ""}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
