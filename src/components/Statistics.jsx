export default function Statistics({ numberOfTasks, numberOfCompleted }) {
  return (
    <div className="flex gap-2 py-2 justify-center">
      <span>
        Completed tasks: {numberOfCompleted} / {numberOfTasks}
      </span>
    </div>
  );
}
