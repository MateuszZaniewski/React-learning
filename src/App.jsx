import "./App.css";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl pb-4">ToDo List</h1>
      <ToDoContainer />
    </>
  );
}

/*
  ToDoApp

  -ToDoContainer
    -ToDoItemCounter
    -ToDoResetList
    -ToDoAdd
  -ToDoList
    -ToDoItem
    -ToDoRemoveItem

*/

export default App;
