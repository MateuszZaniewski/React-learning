export default function Button({ name, color, task }) {
  return (
    <button
      onClick={task}
      className={`px-2 py-1 border border-gray-200 rounded-xl bg-${color}`}
    >
      {name}
    </button>
  );
}
