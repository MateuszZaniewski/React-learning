import Dropplet from "./Dropplet";
import deleteImage from "../assets/delete.png";

export default function Task({
  list,
  completed,
  completeTask,
  unCompleteItem,
  showDate,
  deleteTask,
}) {
  return (
    <div className="">
      <ul className="py-4 h-fit">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg gap-2 pb-2 w-[90%] mx-auto`}
            >
              <Dropplet category={item[1]} />
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } text-xl cursor-pointer`}
                onClick={() =>
                  completed.includes(item)
                    ? unCompleteItem(item)
                    : completeTask(item)
                }
              >
                {item[0]}
              </span>
              <span>{showDate ? item[2].toString() : ""}</span>
              <img
                onClick={() => deleteTask(item)}
                className="h-6 w-6"
                src={deleteImage}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
