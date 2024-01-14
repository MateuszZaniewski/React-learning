import { useState } from "react";

export default function CategoryForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedColor = `bg-[${color}]`.toString();
    const newCategory = {
      name: name,
      count: 0,
      color: modifiedColor,
    };
    onSubmit(newCategory);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleColorChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange}></input>
        <label>Color:</label>
        <input type="text" value={color} onChange={handleColorChange}></input>

        <button
          type="submit"
          className="px-2 py-1 border border-green-200 rounded-xl bg-green-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}
