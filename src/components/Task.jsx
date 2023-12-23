import Dropplet from "./Dropplet";

export default function Task({
  list,
  completed,
  completeTask,
  deleteItem,
  activeCategory,
}) {
  const filteredList = list.filter((item) => {
    if (activeCategory === "all") {
      return true;
    } else {
      return item.includes(activeCategory);
    }
  });
  return (
    <div>
      <ul className="py-4">
        {filteredList.map((item, index) => {
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
                {item[0] + (completed.includes(item) ? "✔" : "")}
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
