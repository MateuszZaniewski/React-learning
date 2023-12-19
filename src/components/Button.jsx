export default function Button({ name, color }) {
  return (
    <button
      className={`px-2 py-1 border border-gray-200 rounded-xl bg-${color}`}
    >
      {name}
    </button>
  );
}
