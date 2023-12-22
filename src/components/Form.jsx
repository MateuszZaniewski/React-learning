import { useState } from "react";

export default function Form(props) {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("homeTasks");
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    props.onSubmit([item, category]);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="pt-2 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-center"
      >
        <div className="flex gap-2">
          <input
            className="border border-gray-400 rounded-lg"
            type="text"
            value={item}
            onChange={handleChange}
          ></input>
          <button
            className="border border-green-200 px-2 py-1 rounded-xl bg-green-200"
            type="submit"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2">
          <label htmlFor="tasks">Category: </label>

          <select id="tasks" value={category} onChange={handleCategoryChange}>
            <option value="homeTasks">Home</option>
            <option value="workTasks">Work</option>
            <option value="personalTasks">Personal</option>
            <option value="financeTasks">Finance</option>
            <option value="healthTasks">Health</option>
            <option value="shoppingTasks">Shopping</option>
          </select>
        </div>
      </form>
    </div>
  );
}
