import { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function CategoryForm({ onSubmit, showModal, setShowModal }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("bg-[#FFFFFF]");
  const colors = [
    "bg-[#CB0303]",
    "bg-[#E95B5B]",
    "bg-[#EC7A00]",
    "bg-[#C18A4F]",
    "bg-[#DDD30F]",
    "bg-[#C7C264]",
    "bg-[#7FDF25]",
    "bg-[#9ACE69]",
    "bg-[#16E2D1]",
    "bg-[#75E2D9]",
    "bg-[#39A9DB]",
    "bg-[#88C7E4]",
    "bg-[#1223E1]",
    "bg-[#636DD8]",
    "bg-[#BB63D8]",
    "bg-[#968E85]",
    "bg-[#F1F5F2]",
    "bg-[#2D2E2D]",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: name,
      count: 0,
      color: color,
    };
    onSubmit(newCategory);
    setShowModal(!showModal);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange}></input>
        <label className="text-2xl py-2">Select color:</label>
        <div className="flex gap-4 flex-wrap pb-4">
          {colors.map((c) => {
            return (
              <div key={c}>
                <ColorPicker background={c} color={color} setColor={setColor} />
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="px-2 py-1 border border-green-200 rounded-xl bg-green-200"
        >
          Save
        </button>
        <span
          onClick={() => setShowModal(!showModal)}
          className="px-2 py-1 border border-red-200 rounded-xl bg-red-200 text-center cursor-pointer"
        >
          Close
        </span>
      </form>
    </div>
  );
}
