import "./App.css";
import { Hello } from "./components/hello";
import Conditional from "./components/Conditional";

function App() {
  const fruits = [
    { name: "Apple", price: "9$" },
    { name: "Bannana", price: "7$" },
    { name: "Orange", price: "12$" },
    { name: "Pear", price: "33$" },
  ];
  return (
    <>
      <Hello fruits={fruits}></Hello>
      <Conditional />
    </>
  );
}

export default App;
