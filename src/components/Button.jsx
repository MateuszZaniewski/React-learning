export default function Button({ name, color, task }) {
  return (
    <div className="flex items-center hover:bg-gray-300 rounded-lg">
      <div className="flex items-center gap-2 justify-start px-2 py-1 rounded-lg rounded-bl-lg  w-full">
        <div className={`h-4 w-6 rounded-lg ${color}`}></div>
        <button className="" onClick={task}>
          {name}
        </button>
      </div>
      <div className="px-2 py-1 rounded-tr-lg rounded-br-lg w-fit">0</div>
    </div>
  );
}
