import determineColor from "../helperFunctions/determineColor";

export default function WeekOverview({ weekDays, list, completed }) {
  return (
    <div className="flex justify-center gap-[7%] pt-4">
      {weekDays.map((day) => {
        const matchingTasks = list.filter((item) => {
          const listItemDate = new Date(item[2]);
          const currentDayDate = new Date(day.join(" "));
          return listItemDate.toDateString() === currentDayDate.toDateString();
        });

        return (
          <div key={day} className="">
            <div
              className={`flex flex-col items-center font-bold w-16 h-[65vmin] max-h-[75vmin] rounded-xl bg-gray-200`}
            >
              {matchingTasks.length > 0 && (
                <div className="flex flex-col w-[90%] mt-1 h-auto mx-auto">
                  {matchingTasks.map((task) => (
                    <div
                      key={task[0]}
                      className={`flex text-center items-center justify-center border ${determineColor(
                        task[1]
                      )} py-2 rounded-xl mb-1 text-transparent hover:text-black`}
                    >
                      {completed
                        .map((completedTask) => completedTask[0])
                        .includes(task[0]) ? (
                        <span
                          className={`w-14 text-[1.2vmin] line-through break-words hyphens-auto `}
                        >
                          {task[0]}
                        </span>
                      ) : (
                        <span
                          className={`w-14 text-[1.2vmin] break-words hyphens-auto `}
                        >
                          {task[0]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
