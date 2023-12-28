import "./App.css";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-center lg:hidden">
        ToDo List
      </h1>
      <ToDoContainer />
    </div>
  );
}

export default App;
