export default function Statistics({ numberOfTasks, numberOfCompleted }) {
  return (
    <div className="flex flex-col gap-2 pt-2 justify-start">
      <span>
        Completed tasks: {numberOfCompleted} / {numberOfTasks}
      </span>
    </div>
  );
}
