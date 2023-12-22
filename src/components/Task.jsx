export default function Task() {
  // template to reorder to simple component
  return (
    <div>
      {/* <ul className="pb-4">
        {list.map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
              <div className="h-5 w-5 border border-blue-400"></div>
              <span
                className={`${
                  completed.includes(item)
                    ? "line-through text-gray-400"
                    : "no-underline"
                } pb-2 border-b border-gray-300 text-2xl cursor-pointer`}
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
      </ul> */}
    </div>
  );
}
