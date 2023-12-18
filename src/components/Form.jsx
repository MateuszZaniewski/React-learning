import { useState } from "react";

export default function Form(props) {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(item);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
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
      </form>
    </div>
  );
}
