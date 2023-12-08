import "./App.css";
import { Hello } from "./components/hello";

function App() {
  const fruits = ["Apple", "Bannana", "Orange", "Pear", "Grapefruit"];

  return (
    <>
      <Hello fruits={fruits}></Hello>
    </>
  );
}

export default App;
