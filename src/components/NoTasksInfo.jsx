export default function NoTasksInfo({ day }) {
  return (
    <div className="border px-4 py-8 my-4 rounded-lg bg-gray-200">
      <span className="italic opacity-60">
        You have no task to complete {day}
      </span>
    </div>
  );
}
