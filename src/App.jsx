import "./App.css";
import { Hello } from "./components/hello";
import Conditional from "./components/Conditional";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  const fruits = [
    { name: "Apple", price: 9 },
    { name: "Bannana", price: 7 },
    { name: "Orange", price: 12 },
    { name: "Pear", price: 33 },
  ];
  return (
    <>
      <Hello fruits={fruits}></Hello>
      <Conditional />
      <Message />
      <Counter />
    </>
  );
}

export default App;
