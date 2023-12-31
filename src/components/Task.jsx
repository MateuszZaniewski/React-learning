import Dropplet from "./Dropplet";

export default function Task({ list, completed, completeTask, deleteItem }) {
  return (
    <div className="">
      <ul className="py-4 h-fit over">
        {list.map((item, index) => {
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
                {item[0] + completed.includes(item)}
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
