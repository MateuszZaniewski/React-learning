export default function Button({ name, color, task }) {
  return (
    <div className="flex items-center gap-4 justify-start">
      <div className={`h-3 w-3 rounded-sm ${color}`}></div>
      <button className="" onClick={task}>
        {name}
      </button>
    </div>
  );
}
