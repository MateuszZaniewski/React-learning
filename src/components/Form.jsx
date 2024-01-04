import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Form(props) {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("home");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit([item, category, startDate]);
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
    <div className="pt-6 lg:pt-0 flex justify-center lg:justify-start lg:pl-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:gap-4 items-center lg:flex-col lg:pt-2 lg:items-start"
      >
        <div className="flex gap-2">
          <input
            className="border border-gray-400 rounded-lg indent-2"
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
        <div className="">
          <label htmlFor="tasks">Category: </label>

          <select
            id="tasks"
            value={category}
            onChange={handleCategoryChange}
            className="indent-1"
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="finance">Finance</option>
            <option value="health">Health</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
        <div>
          <span>Date: </span>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="rounded-xl px-2 py-1 w-fit indent-1"
          />
        </div>
      </form>
    </div>
  );
}
