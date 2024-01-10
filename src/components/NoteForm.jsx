import { useState } from "react";

export default function NoteForm({
  addNote,
  setNoteCreation,
  noteCreation,
  notes,
}) {
  const [color, setColor] = useState("bg-green-300");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSelectChange = (e) => {
    const desiredColor = e.target.dataset.color;
    setColor(desiredColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: notes.length === undefined ? 0 : notes.length,
      title: title,
      text: text,
      color: color,
      edit: false,
    };
    addNote(note);
    setTitle("");
    setText("");
    setColor("bg-green-300");
    setNoteCreation(!noteCreation);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className={`h-[60vmin] w-[450px] mt-5 px-4 pb-4 border rounded-lg ${color}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="w-full flex justify-between pt-4">
          <span
            className="px-2 py-1 border border-gray-500 bg-white rounded-lg text-xl"
            onClick={() => setNoteCreation(!noteCreation)}
          >
            Cancel
          </span>
          <button
            className="px-2 py-1 border border-gray-500 bg-white rounded-lg text-xl"
            type="submit"
          >
            Save
          </button>
        </div>
        <label className="text-2xl py-2">Title:</label>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          value={title}
          onChange={handleTitleChange}
        />
        <label className="text-2xl py-2">Text:</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="resize-none h-[30vmin]"
        ></textarea>
        <label className="text-2xl py-2">Select color:</label>
        <div className="flex justify-around">
          <div
            data-color={"bg-green-300"}
            className="h-8 w-12 rounded-lg border border-black bg-green-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
          <div
            data-color={"bg-blue-300"}
            className="h-8 w-12 rounded-lg border border-black bg-blue-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
          <div
            data-color={"bg-red-300"}
            className="h-8 w-12 rounded-lg border border-black bg-red-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
          <div
            data-color={"bg-yellow-300"}
            className="h-8 w-12 rounded-lg border border-black bg-yellow-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
          <div
            data-color={"bg-purple-300"}
            className="h-8 w-12 rounded-lg border border-black bg-purple-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
          <div
            data-color={"bg-pink-300"}
            className="h-8 w-12 rounded-lg border border-black bg-pink-300"
            onClick={(e) => handleSelectChange(e)}
          ></div>
        </div>
      </form>
    </div>
  );
}
